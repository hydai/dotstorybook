import type { Meta, StoryObj } from "@storybook/react";
import { NeumorphicWell } from "./NeumorphicWell";
import { neumorphismDecorator } from "../../storyDecorator";

const meta = {
  title: "Neumorphism/Components/NeumorphicWell",
  component: NeumorphicWell,
  decorators: [neumorphismDecorator],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof NeumorphicWell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "42", size: "md" },
};

export const AllSizes: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-6 items-center">
      <NeumorphicWell size="sm">S</NeumorphicWell>
      <NeumorphicWell size="md">M</NeumorphicWell>
      <NeumorphicWell size="lg">L</NeumorphicWell>
    </div>
  ),
};

export const WithIcons: Story = {
  args: { children: "Icons" },
  render: () => (
    <div className="flex gap-8 items-end">
      <div className="flex flex-col items-center gap-3">
        <NeumorphicWell size="lg">128</NeumorphicWell>
        <span className="text-sm font-medium text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Projects
        </span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <NeumorphicWell size="lg">4.9</NeumorphicWell>
        <span className="text-sm font-medium text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Rating
        </span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <NeumorphicWell size="lg">99%</NeumorphicWell>
        <span className="text-sm font-medium text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Uptime
        </span>
      </div>
    </div>
  ),
};
