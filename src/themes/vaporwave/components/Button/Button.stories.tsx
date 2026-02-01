import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { vaporwaveDecorator } from "../../storyDecorator";

const meta = {
  title: "Vaporwave/Components/Button",
  component: Button,
  decorators: [vaporwaveDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost"],
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
  args: { children: "TRANSMIT", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "SYNTHWAVE", variant: "secondary" },
};

export const Outline: Story = {
  args: { children: "SCAN", variant: "outline" },
};

export const Ghost: Story = {
  args: { children: "DRIFT", variant: "ghost" },
};

export const Small: Story = {
  args: { children: "OK", variant: "primary", size: "sm" },
};

export const Large: Story = {
  args: { children: "INITIALIZE", variant: "primary", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "LOCKED", variant: "primary", disabled: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 items-center">
        <Button variant="primary">TRANSMIT</Button>
        <Button variant="secondary">SYNTHWAVE</Button>
        <Button variant="outline">SCAN</Button>
        <Button variant="ghost">DRIFT</Button>
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
