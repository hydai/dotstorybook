import type { Meta, StoryObj } from "@storybook/react";
import { UnderlineLink } from "./UnderlineLink";
import { boldTypographyDecorator } from "../../storyDecorator";

const meta = {
  title: "Bold Typography/Components/UnderlineLink",
  component: UnderlineLink,
  decorators: [boldTypographyDecorator],
  argTypes: {
    active: { control: "boolean" },
  },
} satisfies Meta<typeof UnderlineLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "READ ARTICLE", href: "#" },
};

export const Active: Story = {
  args: { children: "CURRENT PAGE", href: "#", active: true },
};

export const Navigation: Story = {
  args: { children: "Nav" },
  render: () => (
    <nav className="flex gap-8 items-center">
      <UnderlineLink href="#" active>
        HOME
      </UnderlineLink>
      <UnderlineLink href="#">WORK</UnderlineLink>
      <UnderlineLink href="#">ABOUT</UnderlineLink>
      <UnderlineLink href="#">CONTACT</UnderlineLink>
    </nav>
  ),
};
