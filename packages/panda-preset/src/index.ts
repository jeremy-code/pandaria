import { definePreset } from "@pandacss/dev";

import { conditions } from "./conditions";
import { globalCss } from "./globalCss";
import { theme } from "./theme";

const defaultPreset = definePreset({
  theme,
  conditions,
  globalCss,
});

export default defaultPreset;
