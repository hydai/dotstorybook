import type { Meta, StoryObj } from "@storybook/react";
import { NeonBorder } from "./NeonBorder";
import { cyberpunkDecorator } from "../../storyDecorator";

const meta = {
  title: "Cyberpunk/Components/NeonBorder",
  component: NeonBorder,
  decorators: [cyberpunkDecorator],
  argTypes: {
    color: {
      control: "select",
      options: ["green", "magenta", "cyan", "rainbow"],
    },
    animated: { control: "boolean" },
  },
} satisfies Meta<typeof NeonBorder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Green: Story = {
  args: {
    color: "green",
    animated: true,
    children: (
      <div className="p-6">
        <p className="text-sm text-[var(--color-text-primary)] font-[var(--font-mono)]">
          Neon green glow border with pulse animation.
        </p>
      </div>
    ),
  },
};

export const Magenta: Story = {
  args: {
    color: "magenta",
    animated: true,
    children: (
      <div className="p-6">
        <p className="text-sm text-[var(--color-text-primary)] font-[var(--font-mono)]">
          Magenta neon border with pulse animation.
        </p>
      </div>
    ),
  },
};

export const Cyan: Story = {
  args: {
    color: "cyan",
    animated: true,
    children: (
      <div className="p-6">
        <p className="text-sm text-[var(--color-text-primary)] font-[var(--font-mono)]">
          Cyan neon border with pulse animation.
        </p>
      </div>
    ),
  },
};

export const Rainbow: Story = {
  args: {
    color: "rainbow",
    animated: true,
    children: (
      <div className="p-6">
        <p className="text-sm text-[var(--color-text-primary)] font-[var(--font-mono)]">
          Multi-color rainbow gradient border.
        </p>
      </div>
    ),
  },
};

export const Static: Story = {
  args: {
    color: "green",
    animated: false,
    children: (
      <div className="p-6">
        <p className="text-sm text-[var(--color-text-primary)] font-[var(--font-mono)]">
          Static glow — no animation.
        </p>
      </div>
    ),
  },
};

export const AllColors: Story = {
  args: { children: "All" },
  render: () => (
    <div className="grid gap-6 max-w-md">
      <NeonBorder color="green">
        <div className="p-4">
          <p className="text-sm text-[var(--color-accent)]">Green</p>
        </div>
      </NeonBorder>
      <NeonBorder color="magenta">
        <div className="p-4">
          <p className="text-sm text-[var(--color-secondary)]">Magenta</p>
        </div>
      </NeonBorder>
      <NeonBorder color="cyan">
        <div className="p-4">
          <p className="text-sm text-[var(--color-tertiary)]">Cyan</p>
        </div>
      </NeonBorder>
      <NeonBorder color="rainbow">
        <div className="p-4">
          <p className="text-sm text-[var(--color-text-primary)]">Rainbow</p>
        </div>
      </NeonBorder>
    </div>
  ),
};
