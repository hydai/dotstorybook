import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { cryptoDecorator } from "../../storyDecorator";

const meta = {
  title: "Crypto/Components/Button",
  component: Button,
  decorators: [cryptoDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "outline", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Connect Wallet", variant: "primary" },
};

export const Outline: Story = {
  args: { children: "Learn More", variant: "outline" },
};

export const Ghost: Story = {
  args: { children: "Settings", variant: "ghost" },
};

export const Link: Story = {
  args: { children: "View on Explorer", variant: "link" },
};

export const Disabled: Story = {
  args: { children: "Unavailable", disabled: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 items-center">
        <Button variant="primary">Connect Wallet</Button>
        <Button variant="outline">Learn More</Button>
        <Button variant="ghost">Settings</Button>
        <Button variant="link">View on Explorer</Button>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="primary" disabled>Disabled Primary</Button>
        <Button variant="outline" disabled>Disabled Outline</Button>
      </div>
    </div>
  ),
};
