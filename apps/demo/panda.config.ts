import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@pandacss/preset-panda", "@pandaria/panda-preset"],
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "../../packages/panda-preset/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  jsxFramework: "react",
});
