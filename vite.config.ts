import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    cloudflare(),
    tsconfigPaths(),
  ],
  resolve: {
    // This helps resolve React 19 exports correctly
    alias: {
      "react-dom/server": "react-dom/server.browser",
    },
  },
});
