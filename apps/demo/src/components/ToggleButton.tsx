"use client";

import { ToggleButton as AriaToggleButton } from "react-aria-components";

import { HTMLStyledProps, styled } from "@/styled/jsx";
import { toggleButton } from "@/styled/recipes";

export const ToggleButton = styled(AriaToggleButton, toggleButton);
export type ToggleButtonProps = HTMLStyledProps<typeof ToggleButton>;
