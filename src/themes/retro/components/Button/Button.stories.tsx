import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { retroDecorator } from "../../storyDecorator";

const meta = {
  title: "Retro/Components/Button",
  component: Button,
  decorators: [retroDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "accent", "danger", "success"],
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

export const Default: Story = {
  args: { children: "OK", variant: "default" },
};

export const Accent: Story = {
  args: { children: "SUBMIT", variant: "accent" },
};

export const Danger: Story = {
  args: { children: "DELETE", variant: "danger" },
};

export const Success: Story = {
  args: { children: "SAVE", variant: "success" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4 items-center flex-wrap">
        <Button variant="default">OK</Button>
        <Button variant="accent">SUBMIT</Button>
        <Button variant="danger">DELETE</Button>
        <Button variant="success">SAVE</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="default" size="sm">SMALL</Button>
        <Button variant="default" size="md">MEDIUM</Button>
        <Button variant="default" size="lg">LARGE</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="default" disabled>DISABLED</Button>
        <Button variant="accent" disabled>DISABLED</Button>
      </div>
    </div>
  ),
};
