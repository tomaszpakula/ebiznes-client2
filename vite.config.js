import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    hmr: {
      port: 5173,
    },
    allowedHosts: [
      'tomaszpakula-client-d7f8dvfxg0g8e5ba.polandcentral-01.azurewebsites.net',
    ],
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
});
