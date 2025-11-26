import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import inlining from "vite-plugin-html-inline-sources";

export default defineConfig({
  plugins: [tailwindcss(), inlining()],
});
