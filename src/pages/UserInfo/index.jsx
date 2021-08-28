import React, { useEffect, useState } from "react";
import { Button, FilePicker, Input, Toast } from "zarm";
import { useHistory } from "react-router-dom";
import Header from "@/components/Header";
import axios from "axios";
import { get, post, imgUrlTrans } from "@/utils";
import { baseUrl } from "config";
import styles from "./index.module.less";

const UserInfo = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState("");
  const [signature, setSignature] = useState("");
  const token = localStorage.getItem("token");

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

  const handleSelect = (file) => {
    console.log("file.file", file.file);
    if (file && file.file.size > 200 * 1024) {
      Toast.show("上传头像不得超过 200 KB！！");
      return;
    }
    let formData = new FormData();
    formData.append("file", file.file);
    axios({
      method: "post",
      url: `${baseUrl}/upload`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    }).then((res) => {
      setAvatar(imgUrlTrans(res.data));
    });
  };

  const save = async () => {
    try {
      await post("/api/user/editUserInfo", {
        signature,
        avatar,
      });
      Toast.show("修改成功");
      history.goBack();
    } catch (error) {
      Toast.show(error.msg);
    }
  };

  return (
    <>
      <Header title="用户信息" />
      <div className={styles.userinfo}>
        <h1>个人资料</h1>
        <div className={styles.item}>
          <div className={styles.title}>头像</div>
          <div className={styles.avatar}>
            <img className={styles.avatarUrl} src={avatar} alt="" />
            <div className={styles.desc}>
              <span>支持 jpg、png、jpeg 格式大小 200KB 以内的图片</span>
              <FilePicker
                className={styles.filePicker}
                onChange={handleSelect}
                accept="image/*"
              >
                <Button className={styles.upload} theme="primary" size="xs">
                  点击上传
                </Button>
              </FilePicker>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>个性签名</div>
          <div className={styles.signature}>
            <Input
              clearable
              type="text"
              value={signature}
              placeholder="请输入个性签名"
              onChange={(value) => setSignature(value)}
            />
          </div>
        </div>
        <Button onClick={save} style={{ marginTop: 50 }} block theme="primary">
          保存
        </Button>
      </div>
    </>
  );
};

export default UserInfo;
