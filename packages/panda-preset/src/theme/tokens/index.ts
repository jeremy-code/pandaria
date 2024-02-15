import { defineTokens } from "@pandacss/dev";

import { fonts } from "./fonts";

export const tokens = defineTokens({
  fonts,
  borders: {
    default: { value: { width: "1", color: "{global.color.border}", style: "solid" } },
  },
});
