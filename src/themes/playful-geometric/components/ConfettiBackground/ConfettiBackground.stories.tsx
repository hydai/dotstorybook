import type { Meta, StoryObj } from "@storybook/react";
import { ConfettiBackground } from "./ConfettiBackground";
import { playfulGeometricDecorator } from "../../storyDecorator";

const meta = {
  title: "Playful Geometric/Components/ConfettiBackground",
  component: ConfettiBackground,
  decorators: [playfulGeometricDecorator],
  argTypes: {
    density: {
      control: "select",
      options: ["sparse", "medium", "dense"],
    },
    animated: { control: "boolean" },
  },
} satisfies Meta<typeof ConfettiBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    density: "medium",
    animated: true,
    className: "h-64 w-full rounded-[var(--radius-lg)] border-2 border-[var(--color-text-primary)] bg-[var(--color-surface-0)]",
  },
};

export const Sparse: Story = {
  args: {
    density: "sparse",
    animated: true,
    className: "h-64 w-full rounded-[var(--radius-lg)] border-2 border-[var(--color-text-primary)] bg-[var(--color-surface-0)]",
  },
};

export const Dense: Story = {
  args: {
    density: "dense",
    animated: true,
    className: "h-64 w-full rounded-[var(--radius-lg)] border-2 border-[var(--color-text-primary)] bg-[var(--color-surface-0)]",
  },
};

export const Static: Story = {
  args: {
    density: "medium",
    animated: false,
    className: "h-64 w-full rounded-[var(--radius-lg)] border-2 border-[var(--color-text-primary)] bg-[var(--color-surface-0)]",
  },
};

export const WithContent: Story = {
  render: () => (
    <ConfettiBackground
      density="medium"
      animated
      className="h-80 w-full rounded-[var(--radius-lg)] border-2 border-[var(--color-text-primary)] bg-[var(--color-surface-0)]"
    >
      <div className="flex h-full items-center justify-center">
        <h2 className="font-[var(--font-heading)] text-4xl font-bold text-[var(--color-text-primary)]">
          Party Time!
        </h2>
      </div>
    </ConfettiBackground>
  ),
};
