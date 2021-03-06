import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Cell } from "zarm";
import { useHistory } from "react-router-dom";
import IconFont from "@/components/IconFont";
import { typeMap } from "@/utils";

import styles from "./index.module.less";

const BillItem = ({ bill }) => {
  const [income, setIncome] = useState(0); // 收入
  const [expense, setExpense] = useState(0); // 支出
  const history = useHistory(); // 路由实例

  // 当添加账单是，bill.bills 长度变化，触发当日收支总和计算。
  useEffect(() => {
    // 初始化将传入的 bill 内的 bills 数组内数据项，过滤出支出和收入。
    // type：1 为支出；2 为收入
    // 通过 reduce 累加
    const _income = bill.bills
      .filter((i) => i.type == 2)
      .reduce((curr, item) => {
        curr += Number(item.amount);
        return curr;
      }, 0);
    const _expense = bill.bills
      .filter((i) => i.type == 1)
      .reduce((curr, item) => {
        curr += Number(item.amount);
        return curr;
      }, 0);
    setIncome(_income);
    setExpense(_expense);
  }, [bill.bills]);

  // 前往账单详情
  const goToDetail = (item) => {
    history.push(`/detail?id=${item.id}`);
  };

  return (
    <div className={styles.item}>
      <div className={styles.headerDate}>
        <div className={styles.date}>
          {dayjs(+bill.date).format("YYYY-MM-DD")}
        </div>
        <div className={styles.money}>
          <span>
            <img src="//s.yezgea02.com/1615953405599/zhi%402x.png" alt="支" />
            <span>¥{expense.toFixed(2)}</span>
          </span>
          <span>
            <img src="//s.yezgea02.com/1615953405599/shou%402x.png" alt="收" />
            <span>¥{income.toFixed(2)}</span>
          </span>
        </div>
      </div>
      {bill &&
        bill.bills.map((item) => (
          <Cell
            className={styles.bill}
            key={item.id}
            onClick={() => goToDetail(item)}
            title={
              <>
                <IconFont
                  className={styles.itemIcon}
                  type={item.category_id ? typeMap[item.category_id].icon : 1}
                />
                <span>{item.category_name}</span>
              </>
            }
            description={
              <span style={{ color: item.type == 2 ? "red" : "#39be77" }}>{`${
                item.type == 1 ? "-" : "+"
              }${item.amount}`}</span>
            }
            help={
              <div>
                {dayjs(+item.date).format("HH:mm")}
                {item.remark ? ` | ${item.remark}` : ""}
              </div>
            }
          ></Cell>
        ))}
    </div>
  );
};

export default BillItem;
