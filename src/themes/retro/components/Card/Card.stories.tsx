import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { retroDecorator } from "../../storyDecorator";

const meta = {
  title: "Retro/Components/Card",
  component: Card,
  decorators: [retroDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "window", "inset"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "System Properties",
    children: (
      <div>
        <p className="text-sm font-[var(--font-body)]">
          Microsoft Windows 95
        </p>
        <p className="text-xs text-[#808080] mt-1 font-[var(--font-body)]">
          4.00.950 B
        </p>
      </div>
    ),
  },
};

export const Window: Story = {
  args: {
    variant: "window",
    title: "My Computer",
    children: (
      <div className="space-y-2">
        <p className="text-sm font-[var(--font-body)]">
          Drive C: 2.1 GB Free
        </p>
        <p className="text-sm font-[var(--font-body)]">
          Drive D: CD-ROM
        </p>
      </div>
    ),
  },
};

export const Inset: Story = {
  args: {
    variant: "inset",
    title: "Status",
    children: (
      <p className="text-sm font-[var(--font-body)]">
        Ready.
      </p>
    ),
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-6 flex-wrap items-start">
      <Card title="Default Panel" className="w-64">
        <p className="text-sm font-[var(--font-body)]">
          Standard outset bevel panel
        </p>
      </Card>
      <Card variant="window" title="My Computer" className="w-64">
        <p className="text-sm font-[var(--font-body)]">
          Win95 window chrome with title bar
        </p>
      </Card>
      <Card variant="inset" title="Output" className="w-64">
        <p className="text-sm font-[var(--font-body)]">
          Sunken content area
        </p>
      </Card>
    </div>
  ),
};
