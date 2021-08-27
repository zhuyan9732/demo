import React, { useEffect, useRef, useState } from "react";
import { Icon, Progress } from "zarm";
import cx from "classnames";
import dayjs from "dayjs";
import { post, typeMap } from "@/utils";
import IconFont from "@/components/IconFont";
import PopupDate from "@/components/PopupDate";
import styles from "./index.module.less";

let proportionChart = null;

const Data = () => {
  const monthRef = useRef();
  const [totalType, setTotalType] = useState("expense");
  const [currentMonth, setCurrentMonth] = useState(dayjs().format("YYYY-MM"));
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [expenseData, setExpenseData] = useState([]);
  const [incomeData, setIncomeData] = useState([]);
  const [pieType, setPieType] = useState("expense");

  useEffect(() => {
    getData();
    return () => {
      // 每次组件卸载的时候，需要释放图表实例。clear 只是将其清空不会释放。
      proportionChart.dispose();
    };
  }, [currentMonth]);

  const getData = async () => {
    const { data } = await post(`/api/bill/getDataStatistics`, {
      date: dayjs(currentMonth).valueOf(),
    });

    // 总收支
    setTotalExpense(data.totalExpense);
    setTotalIncome(data.totalIncome);

    // 过滤支出和收入
    const expense_data = data.totalData
      .filter((item) => item.type == 1)
      .sort((a, b) => b.count - a.count); // 过滤出账单类型为支出的项
    const income_data = data.totalData
      .filter((item) => item.type == 2)
      .sort((a, b) => b.count - a.count); // 过滤出账单类型为收入的项
    setExpenseData(expense_data);
    setIncomeData(income_data);
    setPieChart(pieType == "expense" ? expense_data : income_data);
  };

  // 切换收支构成类型
  const changeTotalType = (type) => {
    setTotalType(type);
  };

  // 切换饼图收支类型
  const changePieType = (type) => {
    setPieType(type);
    // 重绘饼图
    setPieChart(type == "expense" ? expenseData : incomeData);
  };

  // 绘制饼图方法
  const setPieChart = (data) => {
    if (window.echarts) {
      proportionChart = echarts.init(document.getElementById("proportion"));
      proportionChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        // 图例
        legend: {
          data: data.map((item) => item.type_name),
        },
        series: [
          {
            name: "支出",
            type: "pie",
            radius: "55%",
            data: data.map((item) => {
              return {
                value: item.count,
                name: item.category_name,
              };
            }),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    }
  };

  // 月份弹窗开关
  const monthShow = () => {
    monthRef.current && monthRef.current.show();
  };

  const selectMonth = (item) => {
    setCurrentMonth(item);
  };

  return (
    <div className={styles.data}>
      <div className={styles.total}>
        <div className={styles.time} onClick={monthShow}>
          <span>{currentMonth}</span>
          <Icon className={styles.date} type="date" />
        </div>
        <div className={styles.title}>共支出</div>
        <div className={styles.expense}>¥{totalExpense}</div>
        <div className={styles.income}>共收入¥{totalIncome}</div>
      </div>
      <div className={styles.structure}>
        <div className={styles.head}>
          <span className={styles.title}>收支构成</span>
          <div className={styles.tab}>
            <span
              onClick={() => changeTotalType("expense")}
              className={cx({
                [styles.expense]: true,
                [styles.active]: totalType == "expense",
              })}
            >
              支出
            </span>
            <span
              onClick={() => changeTotalType("income")}
              className={cx({
                [styles.income]: true,
                [styles.active]: totalType == "income",
              })}
            >
              收入
            </span>
          </div>
        </div>
        <div className={styles.content}>
          {(totalType == "expense" ? expenseData : incomeData).map((item) => (
            <div key={item.type_id} className={styles.item}>
              <div className={styles.left}>
                <div className={styles.type}>
                  <span
                    className={cx({
                      [styles.expense]: totalType == "expense",
                      [styles.income]: totalType == "income",
                    })}
                  >
                    <IconFont
                      type={item.type_id ? typeMap[item.type_id].icon : 1}
                    />
                  </span>
                  <span className={styles.name}>{item.category_name}</span>
                </div>
                <div className={styles.progress}>
                  ¥{Number(item.count).toFixed(2) || 0}
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.percent}>
                  <Progress
                    shape="line"
                    percent={Number(
                      (item.count /
                        Number(
                          totalType == "expense" ? totalExpense : totalIncome
                        )) *
                        100
                    ).toFixed(2)}
                    theme="primary"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.proportion}>
          <div className={styles.head}>
            <span className={styles.title}>收支构成</span>
            <div className={styles.tab}>
              <span
                onClick={() => changePieType("expense")}
                className={cx({
                  [styles.expense]: true,
                  [styles.active]: pieType == "expense",
                })}
              >
                支出
              </span>
              <span
                onClick={() => changePieType("income")}
                className={cx({
                  [styles.income]: true,
                  [styles.active]: pieType == "income",
                })}
              >
                收入
              </span>
            </div>
          </div>
          <div id="proportion"></div>
        </div>
      </div>
      <PopupDate ref={monthRef} mode="month" onSelect={selectMonth} />
    </div>
  );
};

export default Data;
