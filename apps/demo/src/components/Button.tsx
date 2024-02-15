"use client";

import { Button as AriaButton } from "react-aria-components";

import { HTMLStyledProps, styled } from "@/styled/jsx";
import { button } from "@/styled/recipes";

export const Button = styled(AriaButton, button);
export type ButtonProps = HTMLStyledProps<typeof Button>;
