import { defineRecipe } from "@pandacss/dev";
import { deepmerge } from "deepmerge-ts";

import { button } from "./button";

export const toggleButton = deepmerge(
  button,
  defineRecipe({
    className: "toggleButton",
    variants: {
      variant: {
        subtle: {
          _ariaSelected: {
            bg: "colorPalette.bg",
            color: "colorPalette.fg",
            _ariaHover: {
              bg: "colorPalette.600",
              color: "colorPalette.200",
            },
            _ariaActive: {
              bg: "colorPalette.700",
              color: "colorPalette.200",
            },
          },
        },
      },
    },
    defaultVariants: {
      variant: "subtle",
    },
  })
);
