import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      base: "/stretching-friends-app/",
      manifest: {
        name: "Stretching Friends",
        short_name: "StretchFriends",
        description: "친구들과 함께하는 스트레칭 앱",
        theme_color: "#4F46E5",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/stretching-friends-app/",
        icons: [
          {
            src: "/stretching-friends-app/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/stretching-friends-app/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  base: "/stretching-friends-app/",
});
