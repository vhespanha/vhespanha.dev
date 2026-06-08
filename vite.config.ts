import deno from "@deno/vite-plugin";
import build from "@hono/vite-build/deno";
import dev from "@hono/vite-dev-server";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, UserConfig } from "vite";

const c: UserConfig = {
  build: {
    rolldownOptions: {
      input: "client.ts",
      output: { entryFileNames: "static/client.js" },
    },
  },
};

const s: UserConfig = {
  oxc: { jsx: { importSource: "hono/jsx" } },
  plugins: [
    deno(),
    tailwindcss(),
    dev({ entry: "main.ts" }),
    build({ entry: "main.ts" }),
  ],
};

export default defineConfig(({ mode }) => mode === "client" ? c : s);
