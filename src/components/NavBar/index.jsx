import React, { useCallback, useState } from "react";
import { TabBar } from "zarm";
import IconFont from "@/components/IconFont";
import { useHistory } from "react-router-dom";
import styles from "./index.module.less";

const NavBar = ({ showNav }) => {
  const [activeKey, setActiveKey] = useState("/");
  const history = useHistory();

  const changeTab = useCallback((path) => {
    setActiveKey(path);
    history.push(path);
  }, []);

  return (
    <TabBar
      visible={showNav}
      className={styles.tab}
      activeKey={activeKey}
      onChange={changeTab}
    >
      <TabBar.Item
        itemKey="/"
        title="账单"
        icon={<IconFont type="zhangdan" />}
      />
      <TabBar.Item
        itemKey="/data"
        title="统计"
        icon={<IconFont type="tongji" />}
      />
      <TabBar.Item
        itemKey="/user"
        title="我的"
        icon={<IconFont type="wode" />}
      />
    </TabBar>
  );
};

export default NavBar;
