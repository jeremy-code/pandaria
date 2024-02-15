import { button } from "./button";
import { input } from "./input";
import * as listBox from "./listBox";
import { toggleButton } from "./toggleButton";

export const recipes = {
  button,
  input,
  toggleButton,
  ...listBox,
};
