import type { ExtendableConditions } from "@pandacss/types";

const ARIA_CONDITIONS = {
  ariaHover: "[data-hovered]",
  ariaFocus: "[data-focused]",
  ariaPressed: "[data-pressed]",
  ariaSelected: "[data-selected]",
  ariaDisabled: "[data-disabled]",
  ariaEmpty: "[data-empty]",
  ariaFocusVisible: "[data-focus-visible]",
  ariaFocusWithin: "[data-focus-within]",
  ariaActive: "[data-active]",
};

export const conditions = {
  extend: {
    ...Object.entries(ARIA_CONDITIONS).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: `&:where([data-rac])${value}` }),
      {}
    ),
  },
} satisfies ExtendableConditions;
