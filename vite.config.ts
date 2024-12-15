import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(
        path.dirname(new URL(import.meta.url).pathname),
        "./src",
      ),
    },
  },
  optimizeDeps: {
    include: ["@mui/x-date-pickers/AdapterDateFns", "date-fns"],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
