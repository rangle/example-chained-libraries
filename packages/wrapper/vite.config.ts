// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "wrapper",
      fileName: "wrapper",
    },
  },
  appType: "custom",
  plugins: [
    (dts as Function)({
      insertTypesEntry: true,
    }),
  ],
});
