import type { Meta, StoryObj } from "@storybook/react";
import { WaxSeal } from "./WaxSeal";
import { academiaDecorator } from "../../storyDecorator";

const meta = {
  title: "Academia/Components/WaxSeal",
  component: WaxSeal,
  decorators: [academiaDecorator],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    animated: { control: "boolean" },
  },
} satisfies Meta<typeof WaxSeal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "A+" },
};

export const Small: Story = {
  args: { children: "OK", size: "sm" },
};

export const Large: Story = {
  args: { children: "PHD", size: "lg" },
};

export const Animated: Story = {
  args: { children: "SEAL", size: "lg", animated: true },
};

export const AllSizes: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-6 items-center">
      <WaxSeal size="sm">SM</WaxSeal>
      <WaxSeal size="md">MD</WaxSeal>
      <WaxSeal size="lg">LG</WaxSeal>
    </div>
  ),
};
