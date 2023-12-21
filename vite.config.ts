import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import federation from "@originjs/vite-plugin-federation"
import dns from "dns"

dns.setDefaultResultOrder("verbatim")

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-mfe",
      filename: "remote-mfe-entry.js",
      exposes: {
        "./App": "./src/main.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom", "zustand"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  define: {
    process: process,
  },
})
