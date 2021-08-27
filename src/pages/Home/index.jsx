import React, { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import { Icon, Pull } from "zarm";
import IconFont from "@/components/IconFont";
import BillItem from "@/components/BillItem";
import PopupType from "@/components/PopupType";
import PopupDate from "@/components/PopupDate";
import PopupAddBill from "@/components/PopupAddBill";
import { post, REFRESH_STATE, LOAD_STATE } from "@/utils"; // Pull 组件需要的一些常量

import styles from "./style.module.less";

const Home = () => {
  const typeRef = useRef(); // 账单类型 ref
  const addRef = useRef(); // 添加账单 ref
  const monthRef = useRef(); // 月份筛选 ref
  const [currentSelect, setCurrentSelect] = useState({}); // 当前筛选类型
  const [currentTime, setCurrentTime] = useState(
    `${dayjs(+new Date()).valueOf()}`
  ); // 当前筛选时间
  const [page, setPage] = useState(1); // 分页
  const [list, setList] = useState([]); // 账单列表
  const [totalPage, setTotalPage] = useState(0); // 分页总数
  const [refreshing, setRefreshing] = useState(REFRESH_STATE.normal); // 下拉刷新状态
  const [loading, setLoading] = useState(LOAD_STATE.normal); // 上拉加载状态
  const [totalExpense, setTotalExpense] = useState(0); // 总支出
  const [totalIncome, setTotalIncome] = useState(0); // 总收入

  useEffect(() => {
    getBillList(); // 初始化
  }, [page, currentSelect, currentTime]);

  // 获取账单方法
  const getBillList = async () => {
    const { data } = await post(`/api/bill/getBillList`, {
      page,
      pageSize: 5,
      date: currentTime,
      category_id: currentSelect.id || "0",
    });
    // 下拉刷新，重制数据
    if (page == 1) {
      setList(data.list);
    } else {
      setList(list.concat(data.list));
    }
    setTotalExpense(data.totalExpense.toFixed(2));
    setTotalIncome(data.totalIncome.toFixed(2));
    setTotalPage(data.totalPage);
    // 上滑加载状态
    setLoading(LOAD_STATE.success);
    setRefreshing(REFRESH_STATE.success);
  };

  // 选择月份弹窗
  const monthToggle = () => {
    monthRef.current && monthRef.current.show();
  };

  // 筛选月份
  const selectMonth = (item) => {
    setRefreshing(REFRESH_STATE.loading);
    setPage(1);
    setCurrentTime(dayjs(item).valueOf());
  };

  // 请求列表数据
  const refreshData = () => {
    setRefreshing(REFRESH_STATE.loading);
    if (page != 1) {
      setPage(1);
    } else {
      getBillList();
    }
  };

  const loadData = () => {
    if (page < totalPage) {
      setLoading(LOAD_STATE.loading);
      setPage(page + 1);
    }
  };

  // 添加账单弹窗
  const toggle = () => {
    typeRef.current && typeRef.current.show();
  };

  // 筛选类型
  const select = (item) => {
    setRefreshing(REFRESH_STATE.loading);
    // 触发刷新列表，将分页重制为 1
    setPage(1);
    setCurrentSelect(item);
  };

  const addToggle = () => {
    addRef.current && addRef.current.show();
  };

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.dataWrap}>
          <span className={styles.expense}>
            总支出：<b>¥ {totalExpense}</b>
          </span>
          <span className={styles.income}>
            总收入：<b>¥ {totalIncome}</b>
          </span>
        </div>
        <div className={styles.typeWrap}>
          <div className={styles.left} onClick={toggle}>
            <span className={styles.title}>
              {currentSelect.name || "全部类型"}
              <Icon className={styles.arrow} type="arrow-bottom" />
            </span>
          </div>
          <div className={styles.right}>
            <span className={styles.time} onClick={monthToggle}>
              {dayjs(+currentTime).format("YYYY-MM")}
              <Icon className={styles.arrow} type="arrow-bottom" />
            </span>
          </div>
        </div>
      </div>

      <div className={styles.contentWrap}>
        {list.length ? (
          <Pull
            animationDuration={200}
            stayTime={400}
            refresh={{
              state: refreshing,
              handler: refreshData,
            }}
            load={{
              state: loading,
              distance: 200,
              handler: loadData,
            }}
          >
            {list.map((item, index) => (
              <BillItem bill={item} key={index} />
            ))}
          </Pull>
        ) : null}
      </div>
      <PopupType ref={typeRef} onSelect={select} />
      <PopupDate ref={monthRef} mode="month" onSelect={selectMonth} />
      <div className={styles.add} onClick={addToggle}>
        <IconFont type="tianjia" />
      </div>

      <PopupAddBill ref={addRef} />
    </div>
  );
};

export default Home;
