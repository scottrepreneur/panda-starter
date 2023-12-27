import { defineConfig } from "tsup";

export default defineConfig({
  // sets our preset as the primary entrypoint
  entryPoints: ["src/preset.ts"],

  // other config
});
