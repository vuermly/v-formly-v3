import { fileURLToPath, URL } from "node:url";

import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    outDir: "lib/antdv",
    lib: {
      entry: path.resolve(__dirname, "src/aformly.ts"),
      name: "lib",
      fileName: (format: any) => `v-formly-v3-antdv.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "ant-design-vue", "ajv", "mitt"],
      output: {
        exports: "named",
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: "Vue",
          "ant-design-vue": "antDesignVue",
          ajv: "Ajv",
          mitt: "mitt",
        },
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
