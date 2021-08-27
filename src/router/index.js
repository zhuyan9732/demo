import Home from "@/pages/Home";
import Data from "@/pages/Data";
import User from "@/pages/User";
import Login from "@/pages/Login";
import Detail from "@/pages/Detail";
import Account from "@/pages/Account";
import UserInfo from "@/pages/UserInfo";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/data",
    component: Data,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "/account",
    component: Account,
  },
  {
    path: "/userInfo",
    component: UserInfo,
  },
];

export default routes;
