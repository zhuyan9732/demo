import React, { forwardRef, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Popup, Icon, Toast, Keyboard, Modal, Input } from "zarm";
import cx from "classnames";
import dayjs from "dayjs";
import IconFont from "../IconFont";
import PopupDate from "../PopupDate";
import { get, typeMap, post } from "@/utils";

import styles from "./index.module.less";

const PopupAddBill = forwardRef(({ detail = {}, onReload }, ref) => {
  const dateRef = useRef();
  const id = detail && detail.id; // 外部传进来的账单详情 id
  const [show, setShow] = useState(false);
  const [payType, setPayType] = useState("expense"); // 支出或收入类型
  const [expense, setExpense] = useState([]); // 支出类型数组
  const [income, setIncome] = useState([]); // 收入类型数组
  const [currentType, setCurrentType] = useState({});
  const [amount, setAmount] = useState(""); // 账单价格
  const [remark, setRemark] = useState(""); // 备注
  const [showRemark, setShowRemark] = useState(false); // 备注输入框
  const [date, setDate] = useState(new Date()); // 日期

  useEffect(() => {
    if (detail.id) {
      setPayType(detail.type == 1 ? "expense" : "income");
      setCurrentType({
        id: detail.category_id,
        name: detail.category_name,
      });
      setRemark(detail.remark);
      setAmount(detail.amount);
      setDate(dayjs(Number(detail.date)).$d);
    }
  }, [detail]);

  if (ref) {
    ref.current = {
      show: () => {
        setShow(true);
      },
      close: () => {
        setShow(false);
      },
    };
  }

  useEffect(async () => {
    const { data } = await get("/api/category/getList");
    const _expense = data.filter((i) => i.type == 1); // 支出类型
    const _income = data.filter((i) => i.type == 2); // 收入类型
    setExpense(_expense);
    setIncome(_income);
    // 没有 id 的情况下，说明是新建账单。
    if (!id) {
      setCurrentType(_expense[0]);
    }
  }, []);

  // 切换收入还是支出
  const changeType = (type) => {
    setPayType(type);
    // 切换之后，默认给相应类型的第一个值
    if (type == "expense") {
      setCurrentType(expense[0]);
    } else {
      setCurrentType(income[0]);
    }
  };

  // 日期弹窗
  const handleDatePop = () => {
    dateRef.current && dateRef.current.show();
  };

  // 日期选择回调
  const selectDate = (val) => {
    setDate(val);
  };

  // 选择账单类型
  const choseType = (item) => {
    setCurrentType(item);
  };

  // 监听输入框改变值
  const handleMoney = (value) => {
    value = String(value);
    if (value == "close") return;
    // 点击是删除按钮时
    if (value == "delete") {
      let _amount = amount.slice(0, amount.length - 1);
      setAmount(_amount);
      return;
    }
    // 点击确认按钮时
    if (value == "ok") {
      addBill();
      return;
    }
    // 当输入的值为 '.' 且 已经存在 '.'，则不让其继续字符串相加。
    if (value == "." && amount.includes(".")) return;
    // 小数点后保留两位，当超过两位时，不让其字符串继续相加。
    if (
      value != "." &&
      amount.includes(".") &&
      amount &&
      amount.split(".")[1].length >= 2
    )
      return;
    // amount += value
    setAmount(amount + value);
  };
  // 添加账单
  const addBill = async () => {
    if (!amount) {
      Toast.show("请输入具体金额");
      return;
    }
    const params = {
      amount: Number(amount).toFixed(2),
      category_id: currentType.id,
      category_name: currentType.name,
      date: dayjs(date).unix() * 1000,
      type: payType == "expense" ? 1 : 2,
      remark: remark || "",
    };
    if (id) {
      params.id = id;
      // 如果有 id 需要调用详情更新接口
      const result = await post("/api/bill/editBill", params);
      Toast.show("修改成功");
    } else {
      const result = await post("/api/bill/addBill", params);
      setAmount("");
      setPayType("expense");
      setCurrentType(expense[0]);
      setDate(new Date());
      setRemark("");
      Toast.show("添加成功");
    }
    setShow(false);
    if (onReload) onReload();
  };

  return (
    <Popup
      visible={show}
      direction="bottom"
      onMaskClick={() => setShow(false)}
      destroy={false}
      mountContainer={() => document.body}
    >
      <div className={styles.addWrap}>
        <header className={styles.header}>
          <span className={styles.close} onClick={() => setShow(false)}>
            <Icon type="wrong" />
          </span>
        </header>
        <div className={styles.filter}>
          <div className={styles.type}>
            <span
              onClick={() => changeType("expense")}
              className={cx({
                [styles.expense]: true,
                [styles.active]: payType == "expense",
              })}
            >
              支出
            </span>
            <span
              onClick={() => changeType("income")}
              className={cx({
                [styles.income]: true,
                [styles.active]: payType == "income",
              })}
            >
              收入
            </span>
          </div>
          <div className={styles.time} onClick={handleDatePop}>
            {dayjs(date).format("MM-DD")}{" "}
            <Icon className={styles.arrow} type="arrow-bottom" />
          </div>
        </div>
        <div className={styles.money}>
          <span className={styles.sufix}>¥</span>
          <span className={cx(styles.amount, styles.animation)}>{amount}</span>
        </div>
        <div className={styles.typeWarp}>
          <div className={styles.typeBody}>
            {(payType == "expense" ? expense : income).map((item) => (
              <div
                onClick={() => choseType(item)}
                key={item.id}
                className={styles.typeItem}
              >
                <span
                  className={cx({
                    [styles.iconfontWrap]: true,
                    [styles.expense]: payType == "expense",
                    [styles.income]: payType == "income",
                    [styles.active]: currentType.id == item.id,
                  })}
                >
                  <IconFont
                    className={styles.iconfont}
                    type={typeMap[item.id].icon}
                  />
                </span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.remark}>
          {showRemark ? (
            <Input
              autoHeight
              showLength
              maxLength={50}
              type="text"
              rows={3}
              value={remark}
              placeholder="请输入备注信息"
              onChange={(val) => setRemark(val)}
              onBlur={() => setShowRemark(false)}
            />
          ) : (
            <span onClick={() => setShowRemark(true)}>
              {remark || "添加备注"}
            </span>
          )}
        </div>
        <Keyboard type="price" onKeyClick={(value) => handleMoney(value)} />
        <PopupDate ref={dateRef} onSelect={selectDate} />
      </div>
    </Popup>
  );
});

PopupAddBill.propTypes = {
  detail: PropTypes.object,
  onReload: PropTypes.func,
};

export default PopupAddBill;
