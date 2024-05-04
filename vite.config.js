import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/Art-Exhibition-WebLayout/",
  build: {
    outDir: "dist", // 输出目录
    rollupOptions: {
      output: {
        entryFileNames: "main.js", // 入口文件名
        chunkFileNames: "[name].js", // 分块文件名
        assetFileNames: "[name][extname]", // 资产文件名
      },
    },
  },
  server: {
    port: 3000, // 指定开发服务器端口
    open: true, // 自动打开浏览器
    proxy: {
      "/api": {
        target: "http://localhost:5000", // 代理请求到这个目标
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // 重写路径
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // '@' 代表 'src' 目录
    },
  },
});
