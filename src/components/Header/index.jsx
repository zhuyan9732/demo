import React from "react";
import { useHistory } from "react-router-dom";
import { NavBar, Icon } from "zarm";

import styles from "./index.module.less";

const Header = ({ title = "" }) => {
  const history = useHistory();
  return (
    <div className={styles.headerWarp}>
      <div className={styles.block}>
        <NavBar
          className={styles.header}
          left={
            <Icon
              type="arrow-left"
              theme="primary"
              onClick={() => history.goBack()}
            />
          }
          title={title}
        />
      </div>
    </div>
  );
};

export default Header;
