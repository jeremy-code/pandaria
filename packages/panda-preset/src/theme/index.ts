import type { ExtendableTheme } from "@pandacss/types";

import { recipes } from "./recipes";
import { semanticTokens } from "./semanticTokens";
import { tokens } from "./tokens";

export const theme = {
  extend: {
    recipes,
    semanticTokens,
    tokens,
  },
} satisfies ExtendableTheme;

export default theme;
