import { defineSemanticTokens } from "@pandacss/dev";

// prettier-ignore
const COLORS = ["rose", "pink", "fuchsia", "purple", "violet", "indigo", "blue", "sky", "cyan", "teal", "emerald", "green", "lime", "yellow", "amber", "orange", "red", "neutral", "stone", "zinc", "gray", "slate"];

const colors = COLORS.reduce(
  (acc, color) => ({
    ...acc,
    [color]: {
      bg: {
        DEFAULT: { value: { base: `{colors.${color}.500}`, _dark: `{colors.${color}.200}` } },
        1: { value: { base: `{colors.${color}.600}`, _dark: `{colors.${color}.300}` } },
        2: { value: { base: `{colors.${color}.700}`, _dark: `{colors.${color}.400}` } },
      },
      fg: {
        DEFAULT: { value: { base: `{colors.${color}.200}`, _dark: `{colors.${color}.800}` } },
        1: { value: { base: `{colors.${color}.300}`, _dark: `{colors.${color}.700}` } },
        2: { value: { base: `{colors.${color}.400}`, _dark: `{colors.${color}.600}` } },
      },
    },
  }),
  {}
);

export const semanticTokens = defineSemanticTokens({
  global: {
    color: {
      border: { value: { base: "{colors.gray.100}", _dark: "{colors.gray.700}" } },
    },
    font: {
      body: { value: "{fonts.sans}" },
    },
  },
  colors: {
    ...colors,
    bg: {
      canvas: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.900}" } },
      default: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.900}" } },
      muted: { value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.800}" } },
      emphasized: { value: { base: "{colors.neutral.300}", _dark: "{colors.neutral.700}" } },
      disabled: { value: { base: "{colors.neutral.400}", _dark: "{colors.neutral.600}" } },
    },
    fg: {
      default: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.100}" } },
      muted: { value: { base: "{colors.neutral.800}", _dark: "{colors.neutral.200}" } },
      emphasized: { value: { base: "{colors.neutral.700}", _dark: "{colors.neutral.300}" } },
      disabled: { value: { base: "{colors.neutral.600}", _dark: "{colors.neutral.400}" } },
    },
  },
});
