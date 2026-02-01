import type { Meta, StoryObj } from "@storybook/react";
import { ParchmentBackground } from "./ParchmentBackground";
import { academiaDecorator } from "../../storyDecorator";

const meta = {
  title: "Academia/Components/ParchmentBackground",
  component: ParchmentBackground,
  decorators: [academiaDecorator],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    showPaper: { control: "boolean" },
    showVignette: { control: "boolean" },
    intensity: {
      control: "select",
      options: ["subtle", "medium", "dramatic"],
    },
  },
} satisfies Meta<typeof ParchmentBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showPaper: true,
    showVignette: true,
    intensity: "subtle",
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <p
          className="text-3xl font-semibold text-[var(--color-text-primary)] font-[var(--font-heading)]"
          style={{
            textShadow:
              "1px 1px 0 rgba(0, 0, 0, 0.6), -1px -1px 0 rgba(232, 223, 212, 0.08)",
          }}
        >
          The Great Library
        </p>
      </div>
    ),
  },
};

export const PaperOnly: Story = {
  args: {
    showPaper: true,
    showVignette: false,
    intensity: "subtle",
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl font-semibold text-[var(--color-text-primary)] font-[var(--font-heading)]">
          Paper Texture Only
        </p>
      </div>
    ),
  },
};

export const Dramatic: Story = {
  args: {
    showPaper: true,
    showVignette: true,
    intensity: "dramatic",
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <p
          className="text-4xl font-semibold text-[var(--color-accent)] font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 20px rgba(201, 169, 98, 0.5), 0 0 40px rgba(201, 169, 98, 0.3)",
          }}
        >
          Dramatic Vignette
        </p>
      </div>
    ),
  },
};

export const NoEffects: Story = {
  args: {
    showPaper: false,
    showVignette: false,
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl font-semibold text-[var(--color-text-primary)] font-[var(--font-heading)]">
          Clean Backdrop
        </p>
      </div>
    ),
  },
};
