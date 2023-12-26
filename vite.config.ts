import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import federation from "@originjs/vite-plugin-federation"
import dns from "dns"

dns.setDefaultResultOrder("verbatim")

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [
      react(),
      federation({
        name: "remote-mfe",
        filename: "remote-mfe-entry.js",
        exposes: {
          "./App": "./src/main.tsx",
          "./CountStore": "./src/modules/example-module/stores/countStore.ts",
        },
        shared: {
          "react": "*",
          "react-dom": "*",
          "react-router-dom": "*",
          "zustand": "*",
        },
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
    server: {
      port: +env.PORT,
    },
    preview: {
      port: +env.PORT,
      strictPort: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    define: {
      process: process,
    },
  }
})
