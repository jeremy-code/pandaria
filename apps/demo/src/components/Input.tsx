"use client";

import { Input as AriaInput } from "react-aria-components";

import { HTMLStyledProps, styled } from "@/styled/jsx";
import { input } from "@/styled/recipes";

export const Input = styled(AriaInput, input);
export type InputProps = HTMLStyledProps<typeof Input>;
