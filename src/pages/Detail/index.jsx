import React, { useEffect, useRef, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Modal, Toast } from "zarm";
import qs from "query-string";
import cx from "classnames";
import dayjs from "dayjs";
import Header from "@/components/Header";
import IconFont from "@/components/IconFont";
import PopupAddBill from "@/components/PopupAddBill";
import { post, typeMap } from "@/utils";

import styles from "./index.module.less";

const Detail = () => {
  const addRef = useRef();
  const location = useLocation();
  const history = useHistory();
  const { id } = qs.parse(location.search);

  const [detail, setDetail] = useState({});

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const { data } = await post(`/api/bill/getBillDetail`, {
      id,
    });
    setDetail(data);
  };

  // 删除方法
  const deleteDetail = () => {
    Modal.confirm({
      title: "删除",
      content: "确认删除账单？",
      onOk: async () => {
        const { data } = await post("/api/bill/delBill", { id });
        Toast.show("删除成功");
        history.goBack();
      },
    });
  };

  // 打开编辑弹窗方法
  const openModal = () => {
    addRef.current && addRef.current.show();
  };

  return (
    <div className={styles.detail}>
      <Header title="账单详情" />
      <div className={styles.card}>
        <div className={styles.type}>
          <span
            className={cx({
              [styles.expense]: detail.type == 1,
              [styles.income]: detail.type == 2,
            })}
          >
            <IconFont
              className={styles.iconfont}
              type={detail.category_id ? typeMap[detail.category_id].icon : 1}
            />
          </span>
          <span>{detail.category_name || ""}</span>
        </div>
        {detail.type == 1 ? (
          <div className={cx(styles.amount, styles.expense)}>
            -{detail.amount}
          </div>
        ) : (
          <div className={cx(styles.amount, styles.incom)}>
            +{detail.amount}
          </div>
        )}
        <div className={styles.info}>
          <div className={styles.time}>
            <span>记录时间</span>
            <span>{dayjs(Number(detail.date)).format("YYYY-MM-DD HH:mm")}</span>
          </div>
          <div className={styles.remark}>
            <span>备注</span>
            <span>{detail.remark || "-"}</span>
          </div>
        </div>
        <div className={styles.operation}>
          <span onClick={deleteDetail}>
            <IconFont type="shanchu" />
            删除
          </span>
          <span onClick={openModal}>
            <IconFont type="tianjia" />
            编辑
          </span>
        </div>
      </div>
      <PopupAddBill ref={addRef} detail={detail} onReload={getDetail} />
    </div>
  );
};

export default Detail;
