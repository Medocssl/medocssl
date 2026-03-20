import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(), // React Router should generally come before Cloudflare
    cloudflare(),
    tsconfigPaths(),
  ],
  ssr: {
    resolve: {
      external: ["node:async_hooks"], // Prevents common Cloudflare SSR errors
      conditions: ["workerd", "worker", "browser"],
    },
  },
});
