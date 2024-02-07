import { defineRecipe } from "@pandacss/dev";

export const button = defineRecipe({
  className: "button",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    borderRadius: "md",
    fontSize: "md",
    fontWeight: "medium",
    transition: "colors",
    outline: "none",
    py: 2,
    px: 3,
    gap: 1,
    cursor: "default",
    colorPalette: "slate",
    _ariaPressed: { shadow: "inner" },
    _ariaFocusVisible: { outline: "auto" },
  },
  variants: {
    variant: {
      solid: {
        bg: {
          base: "colorPalette.500",
          _ariaHover: "colorPalette.600",
          _ariaActive: "colorPalette.700",
          _ariaDisabled: "colorPalette.200",
        },
        color: {
          base: "colorPalette.200",
          _ariaDisabled: "colorPalette.700/50",
        },
      },
      outline: {
        border: "1px solid",
        borderColor: {
          base: "colorPalette.700",
          _ariaDisabled: "colorPalette.700/50",
        },
        bg: {
          base: "transparent",
          _ariaHover: "colorPalette.100",
          _ariaActive: "colorPalette.200",
          _ariaDisabled: "colorPalette.300",
        },
        color: {
          base: "colorPalette.700",
          _ariaDisabled: "colorPalette.700/50",
        },
      },
      subtle: {},
      link: {},
    },
  },
  defaultVariants: { variant: "solid" },
});
