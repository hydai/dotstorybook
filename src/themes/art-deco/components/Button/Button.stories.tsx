import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { artDecoDecorator } from "../../storyDecorator";

const meta = {
  title: "Art Deco/Components/Button",
  component: Button,
  decorators: [artDecoDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "solid", "outline"],
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
  args: { children: "RESERVE", variant: "default" },
};

export const Solid: Story = {
  args: { children: "PURCHASE", variant: "solid" },
};

export const Outline: Story = {
  args: { children: "EXPLORE", variant: "outline" },
};

export const Small: Story = {
  args: { children: "RSVP", variant: "default", size: "sm" },
};

export const Large: Story = {
  args: { children: "ENTER THE GALA", variant: "default", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "SOLD OUT", variant: "default", disabled: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 items-center">
        <Button variant="default">RESERVE</Button>
        <Button variant="solid">PURCHASE</Button>
        <Button variant="outline">EXPLORE</Button>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="default" size="sm">
          SM
        </Button>
        <Button variant="default" size="md">
          MD
        </Button>
        <Button variant="default" size="lg">
          LG
        </Button>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="default" disabled>
          SOLD OUT
        </Button>
        <Button variant="solid" disabled>
          SOLD OUT
        </Button>
      </div>
    </div>
  ),
};
