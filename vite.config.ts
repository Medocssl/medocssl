export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    cloudflare(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      // This forces Vite to use the correct React 19 server entry point
      "react-dom/server": "react-dom/server.browser",
    },
  },
});
