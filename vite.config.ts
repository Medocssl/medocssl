// ... existing imports
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
