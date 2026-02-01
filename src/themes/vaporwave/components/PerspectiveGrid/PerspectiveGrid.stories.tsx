import type { Meta, StoryObj } from "@storybook/react";
import { PerspectiveGrid } from "./PerspectiveGrid";
import { vaporwaveDecorator } from "../../storyDecorator";

const meta = {
  title: "Vaporwave/Components/PerspectiveGrid",
  component: PerspectiveGrid,
  decorators: [vaporwaveDecorator],
  argTypes: {
    color: {
      control: "select",
      options: ["mixed", "cyan", "magenta"],
    },
    animated: { control: "boolean" },
  },
} satisfies Meta<typeof PerspectiveGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mixed: Story = {
  args: {
    color: "mixed",
    animated: true,
    className: "h-64 w-full",
  },
};

export const Cyan: Story = {
  args: {
    color: "cyan",
    animated: true,
    className: "h-64 w-full",
  },
};

export const Magenta: Story = {
  args: {
    color: "magenta",
    animated: true,
    className: "h-64 w-full",
  },
};

export const Static: Story = {
  args: {
    color: "mixed",
    animated: false,
    className: "h-64 w-full",
  },
};

export const WithContent: Story = {
  args: {
    color: "mixed",
    className: "h-64 w-full",
    children: (
      <div className="flex items-end justify-center h-full pb-8">
        <span className="text-2xl font-bold uppercase tracking-widest text-[var(--color-accent)] font-[var(--font-heading)]">
          OUTRUN
        </span>
      </div>
    ),
  },
};
