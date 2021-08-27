import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import styleImport from "vite-plugin-style-import";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:7001/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // 将 /api 重写为空
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      utils: path.resolve(__dirname, "src/utils"),
      config: path.resolve(__dirname, "src/config"), // src 路径
    },
  },
  plugins: [
    reactRefresh(),
    styleImport({
      libs: [
        {
          libraryName: "zarm",
          esModule: true,
          resolveStyle: (name) => {
            return `zarm/es/${name}/style/css`;
          },
        },
      ],
    }),
  ],
  css: {
    modules: {
      localsConvention: "dashesOnly",
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
