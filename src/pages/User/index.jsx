import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Cell, Modal, Input, Button, Toast, FilePicker } from "zarm";
import { get, post, imgUrlTrans } from "@/utils";

import styles from "./index.module.less";

const User = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [signature, setSignature] = useState("");
  const [show, setShow] = useState(false);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getUserInfo();
  }, []);

  // 获取用户信息
  const getUserInfo = async () => {
    const { data } = await get("/api/user/getUserInfo");
    setUser(data);
    setAvatar(imgUrlTrans(data.avatar));
    setSignature(data.signature);
  };

  // 个性签名弹窗确认
  const confirmSig = async () => {
    const { data } = await post("/api/user/editUserInfo", {
      signature: signature,
    });
    setUser(data);
    setShow(false);
    Toast.show("修改成功");
  };

  // 退出登录
  const logout = async () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <div className={styles.user}>
      <div className={styles.head}>
        <div className={styles.info}>
          <span>昵称：{user.username}</span>
          <span>
            <img
              style={{ width: 30, height: 30, verticalAlign: "-10px" }}
              src="//s.yezgea02.com/1615973630132/geqian.png"
              alt=""
            />
            <b>{user.signature || "暂无内容"}</b>
          </span>
        </div>
        <img
          className={styles.avatar}
          style={{ width: 60, height: 60, borderRadius: 8 }}
          src={avatar}
          alt=""
        />
      </div>
      <div className={styles.content}>
        <Cell
          hasArrow
          title="用户信息修改"
          onClick={() => history.push("/userInfo")}
          icon={
            <img
              style={{ width: 20, verticalAlign: "-7px" }}
              src="//s.yezgea02.com/1615974766264/gxqm.png"
              alt=""
            />
          }
        />
        <Cell
          hasArrow
          title="重置密码"
          onClick={() => history.push("/account")}
          icon={
            <img
              style={{ width: 20, verticalAlign: "-7px" }}
              src="//s.yezgea02.com/1615974766264/zhaq.png"
              alt=""
            />
          }
        />
      </div>
      <Button className={styles.logout} block theme="danger" onClick={logout}>
        退出登录
      </Button>
      <Modal
        visible={show}
        title="标题"
        closable
        onCancel={() => setShow(false)}
        footer={
          <Button block theme="primary" onClick={confirmSig}>
            确认
          </Button>
        }
      >
        <Input
          autoHeight
          showLength
          maxLength={50}
          type="text"
          rows={3}
          value={signature}
          placeholder="请输入备注信息"
          onChange={(val) => setSignature(val)}
        />
      </Modal>
    </div>
  );
};

export default User;
