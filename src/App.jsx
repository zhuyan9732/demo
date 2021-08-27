import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { ConfigProvider } from "zarm";
import zhCN from "zarm/lib/config-provider/locale/zh_CN";
import "zarm/dist/zarm.css";
import NavBar from "@/components/NavBar";
import routes from "@/router";

function App() {
  const location = useLocation();
  const { pathname } = location;
  const needNav = ["/", "/data", "/user"];
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setShowNav(needNav.includes(pathname));
  }, [pathname]);

  return (
    <>
      <ConfigProvider primaryColor={"#007fff"} locale={zhCN}>
        <Switch>
          {routes.map((route) => (
            <Route exact key={route.path} path={route.path}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </ConfigProvider>
      <NavBar showNav={showNav} />
    </>
  );
}

export default App;
