import type { Meta, StoryObj } from "@storybook/react";
import { GridBackground } from "./GridBackground";
import { cryptoDecorator } from "../../storyDecorator";

const meta = {
  title: "Crypto/Components/GridBackground",
  component: GridBackground,
  decorators: [cryptoDecorator],
  argTypes: {
    density: {
      control: "select",
      options: ["normal", "dense"],
    },
    showGlow: { control: "boolean" },
  },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof GridBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    density: "normal",
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-[var(--color-text-primary)] font-[var(--font-heading)]">
          Normal Grid (50px)
        </p>
      </div>
    ),
  },
};

export const Dense: Story = {
  args: {
    density: "dense",
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-[var(--color-text-primary)] font-[var(--font-heading)]">
          Dense Grid (50px + 150px secondary)
        </p>
      </div>
    ),
  },
};

export const WithGlow: Story = {
  args: {
    density: "normal",
    showGlow: true,
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-[var(--color-text-primary)] font-[var(--font-heading)]">
          Grid with ambient orange glow
        </p>
      </div>
    ),
  },
};
