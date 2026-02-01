import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { academiaDecorator } from "../../storyDecorator";

const meta = {
  title: "Academia/Components/Button",
  component: Button,
  decorators: [academiaDecorator],
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
  args: { children: "ENROLL", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "CONSULT THE ARCHIVES", variant: "secondary" },
};

export const Ghost: Story = {
  args: { children: "BROWSE CATALOG", variant: "ghost" },
};

export const Small: Story = {
  args: { children: "APPLY", variant: "primary", size: "sm" },
};

export const Large: Story = {
  args: { children: "BEGIN RESEARCH", variant: "primary", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "ENROLLMENT CLOSED", variant: "primary", disabled: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 items-center">
        <Button variant="primary">ENROLL</Button>
        <Button variant="secondary">CONSULT THE ARCHIVES</Button>
        <Button variant="ghost">BROWSE CATALOG</Button>
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
          ENROLLMENT CLOSED
        </Button>
        <Button variant="secondary" disabled>
          ENROLLMENT CLOSED
        </Button>
      </div>
    </div>
  ),
};
