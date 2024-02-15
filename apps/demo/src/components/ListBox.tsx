"use client";

import { ListBox as AriaListBox, ListBoxItem as AriaListBoxItem } from "react-aria-components";

import { HTMLStyledProps, styled } from "@/styled/jsx";
import { listBox, listBoxItem } from "@/styled/recipes";

export const ListBox = styled(AriaListBox, listBox);
export type ListBoxProps = HTMLStyledProps<typeof ListBox>;

export const ListBoxItem = styled(AriaListBoxItem, listBoxItem);
export type ListBoxItemProps = HTMLStyledProps<typeof ListBoxItem>;
