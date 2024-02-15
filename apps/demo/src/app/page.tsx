import { ChevronRight } from "lucide-react";

import { Button, Input, ListBox, ListBoxItem, ToggleButton } from "../components";

const Page = () => {
  return (
    <div>
      <p>Hello</p>
      <Button isDisabled>Button</Button>
      <Button variant="outline">Button</Button>
      <Button>Button</Button>
      <Button>
        Button
        <ChevronRight />
      </Button>

      <ListBox aria-label="Favorite animal" selectionMode="single">
        <ListBoxItem>Aardvark</ListBoxItem>
        <ListBoxItem>Cat</ListBoxItem>
        <ListBoxItem>Dog</ListBoxItem>
        <ListBoxItem>Kangaroo</ListBoxItem>
        <ListBoxItem>Panda</ListBoxItem>
        <ListBoxItem>Snake</ListBoxItem>
      </ListBox>

      <Input />

      <ToggleButton>Toggle</ToggleButton>
    </div>
  );
};
export default Page;
