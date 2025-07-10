import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],

  build: {
    lib: {
      entry: "src/lib/ChatButton.svelte",
      name: "Nimo",
      fileName: "nimo-chat",
      formats: ["es", "umd"],
    },
  },
});
