import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { terminalDecorator } from "../../storyDecorator";

const meta = {
  title: "Terminal/Components/Button",
  component: Button,
  decorators: [terminalDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
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
  args: { children: "SUBMIT", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "CANCEL", variant: "secondary" },
};

export const Ghost: Story = {
  args: { children: "SKIP", variant: "ghost" },
};

export const Small: Story = {
  args: { children: "OK", variant: "primary", size: "sm" },
};

export const Large: Story = {
  args: { children: "EXECUTE", variant: "primary", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "LOCKED", variant: "primary", disabled: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 items-center">
        <Button variant="primary">SUBMIT</Button>
        <Button variant="secondary">CANCEL</Button>
        <Button variant="ghost">SKIP</Button>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="primary" size="sm">
          SM
        </Button>
        <Button variant="primary" size="md">
          MD
        </Button>
        <Button variant="primary" size="lg">
          LG
        </Button>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="primary" disabled>
          LOCKED
        </Button>
        <Button variant="secondary" disabled>
          LOCKED
        </Button>
      </div>
    </div>
  ),
};
