import { defineRecipe } from "@pandacss/dev";

export const input = defineRecipe({
  className: "input",
  base: {
    p: 2,
    border: "default",
    rounded: "md",
    outline: {
      base: "none",
      _ariaFocus: "auto",
    },
  },
  variants: {},
  defaultVariants: {},
});
