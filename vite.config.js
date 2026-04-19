import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    minify: "esbuild",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        jasaWebsiteJepara: path.resolve(__dirname, "jasa-website-jepara/index.html"),
        customWebsiteMurahJepara: path.resolve(
          __dirname,
          "custom-website-murah-jepara/index.html",
        ),
        jasaLandingPageJepara: path.resolve(
          __dirname,
          "jasa-landing-page-jepara/index.html",
        ),
        jasaCompanyProfileJepara: path.resolve(
          __dirname,
          "jasa-company-profile-jepara/index.html",
        ),
      },
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          icons: ["lucide-react"],
        },
      },
    },
  },
});
