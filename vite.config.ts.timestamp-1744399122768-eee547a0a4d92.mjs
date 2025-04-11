import { defineConfig } from "file:///C:/siteHistory/leti-history-explorer-76-main/node_modules/vite/dist/node/index.js";
import react from "file:///C:/siteHistory/leti-history-explorer-76-main/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\siteHistory\\leti-history-explorer-76-main";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    mode === "develompent" && react()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
