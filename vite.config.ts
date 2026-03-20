import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite"; // This line was likely missing or broken
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    cloudflare(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "react-dom/server": "react-dom/server.browser",
    },
  },
});
