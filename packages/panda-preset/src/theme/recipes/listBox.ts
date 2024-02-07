import { defineRecipe } from "@pandacss/dev";

export const listBox = defineRecipe({
  className: "list-box",
  base: {
    display: "flex",
    flexDir: "column",
    overflow: "auto",
    p: 1,
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "md",
    bgColor: "white",
    outline: "none",
    width: "lg",
    colorPalette: "blue",
    _ariaFocusVisible: { outline: "auto" },
  },
});

export const listBoxItem = defineRecipe({
  className: "list-box-item",
  base: {
    m: 0.5,
    px: 2,
    py: 1,
    rounded: "md",
    outline: "none",
    fontSize: "md",
    display: "flex",
    flexDir: "column",
    _ariaHover: { bgColor: "gray.100" },
    _selected: {
      _ariaFocusVisible: { outline: "auto" },
      bgColor: "colorPalette.500",
      color: "white",
    },
  },
});
