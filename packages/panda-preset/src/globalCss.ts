import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = {
  extend: {
    ...defineGlobalStyles({
      html: {
        "--global-font-body": "{fonts.sans}",
        "--font-fallback": "initial",
        lineHeight: "normal",
      },
    }),
  },
};
