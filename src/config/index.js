const MODE = import.meta.env.MODE; // 环境变量

export const baseUrl =
  MODE == "development" ? "/api" : "http://42.193.155.28:7001/api";
