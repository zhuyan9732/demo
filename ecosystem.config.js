module.exports = {
  apps: [
    {
      name: "juejue-vite-h5",
      script: "juejue-vite-h5-server.js",
    },
  ],
  deploy: {
    production: {
      user: "root",
      host: "42.193.155.28",
      ref: "origin/main",
      repo: "git@github.com:zhuyan9732/demo.git",
      path: "/app",
      "post-deploy":
        "git reset --hard && git checkout main && git pull && npm i --production=false && pm2 startOrReload ecosystem.config.js", // -production=false 下载全量包
      env: {
        NODE_ENV: "production",
      },
    },
  },
};
