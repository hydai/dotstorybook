import type { Meta, StoryObj } from "@storybook/react";
import { GradientText } from "./GradientText";

const meta = {
  title: "Linear Modern/Components/GradientText",
  component: GradientText,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "shimmer"],
    },
    as: {
      control: "select",
      options: ["span", "h1", "h2", "h3", "p"],
    },
  },
} satisfies Meta<typeof GradientText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Beautiful Gradient Text",
    variant: "default",
    className: "text-4xl font-bold",
  },
};

export const Shimmer: Story = {
  args: {
    children: "Shimmering Gradient Text",
    variant: "shimmer",
    className: "text-4xl font-bold",
  },
};

export const AsHeading: Story = {
  args: {
    children: "Heading with Gradient",
    as: "h1",
    variant: "default",
    className: "text-5xl font-bold tracking-tight",
  },
};
