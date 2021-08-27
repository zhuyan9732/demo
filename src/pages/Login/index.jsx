import React, { useState, useCallback, useMemo } from "react";
import cx from "classnames";
import Captcha from "react-captcha-code";
import { Cell, Input, Button, Checkbox, Toast } from "zarm";
import { post } from "@/utils";
import IconFont from "@/components/IconFont";
import styles from "./index.module.less";

const Login = () => {
  const [type, setType] = useState("login"); // 登录注册类型
  const [username, setUsername] = useState(""); // 账号
  const [password, setPassword] = useState(""); // 密码
  const [verify, setVerify] = useState(""); // 验证码
  const [captcha, setCaptcha] = useState(""); // 验证码变化后存储值

  const isLogin = useMemo(() => type === "login", [type]);

  const handleSubmit = async () => {
    if (!username) {
      Toast.show("请输入账号");
      return;
    }
    if (!password) {
      Toast.show("请输入密码");
      return;
    }

    try {
      if (isLogin) {
        const { data } = await post("/api/user/login", {
          username,
          password,
        });
        localStorage.setItem("token", data.token);
        Toast.show("登录成功");
        window.location.href = "/";
        return;
      }
      if (!verify) {
        Toast.show("请输入验证码");
        return;
      }
      if (verify != captcha) {
        Toast.show("验证码错误");
        return;
      }
      await post("/api/user/register", {
        username,
        password,
      });
      setType("login");
      Toast.show("注册成功");
    } catch (error) {
      Toast.show(error.msg || "系统错误");
    }
  };

  const handleChange = useCallback((key, value) => {
    console.log(key, value);
    switch (key) {
      case "username":
        setUsername(value);
        return;
      case "password":
        setPassword(value);
        return;
      case "verify":
        setVerify(value);
        return;
      case "captcha":
        setCaptcha(value);
        return;
    }
  }, []);

  return (
    <div className={styles.auth}>
      <div className={styles.head} />
      <div className={styles.tab}>
        <span
          className={cx({ [styles.avtive]: type == "login" })}
          onClick={() => setType("login")}
        >
          登录
        </span>
        <span
          className={cx({ [styles.avtive]: type == "register" })}
          onClick={() => setType("register")}
        >
          注册
        </span>
      </div>
      <div className={styles.form}>
        <Cell icon={<IconFont type="zhanghao" />}>
          <Input
            clearable
            type="text"
            placeholder="请输入账号"
            onChange={(val) => handleChange("username", val)}
          />
        </Cell>
        <Cell icon={<IconFont type="mima" />}>
          <Input
            clearable
            type="password"
            placeholder="请输入密码"
            onChange={(val) => handleChange("password", val)}
          />
        </Cell>
        {!isLogin && (
          <Cell icon={<IconFont type="mima" />}>
            <Input
              clearable
              type="text"
              placeholder="请输入验证码"
              onChange={(val) => handleChange("verify", val)}
            />
            <Captcha
              charNum={4}
              onChange={(val) => handleChange("captcha", val)}
            />
          </Cell>
        )}
      </div>
      <div className={styles.operation}>
        {!isLogin && (
          <div className={styles.agree}>
            <Checkbox />
            <label className="text-light">
              阅读并同意<a>《XXX条款》</a>
            </label>
          </div>
        )}
        <Button block theme="primary" onClick={handleSubmit}>
          {isLogin ? "登录" : "注册"}
        </Button>
      </div>
    </div>
  );
};

export default Login;
