import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = {
  extend: defineGlobalStyles({
    html: {
      "--font-fallback": "initial",
      lineHeight: "normal",
    },
  }),
};
