import type { Meta, StoryObj } from "@storybook/react";
import { PaperTexture } from "./PaperTexture";
import { businessStyleDecorator } from "../../storyDecorator";

const meta = {
  title: "Business Style/Components/PaperTexture",
  component: PaperTexture,
  decorators: [businessStyleDecorator],
  argTypes: {
    intensity: {
      control: "select",
      options: ["subtle", "medium"],
    },
  },
} satisfies Meta<typeof PaperTexture>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Subtle: Story = {
  args: {
    intensity: "subtle",
    children: (
      <div className="p-8 bg-[var(--color-surface-0)]">
        <h2 className="text-2xl font-bold font-[var(--font-heading)] text-[var(--color-text-primary)] mb-3">
          Paper Texture — Subtle
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)] leading-relaxed">
          A barely-perceptible noise overlay that adds organic warmth to the
          ivory background, reminiscent of premium bond paper.
        </p>
      </div>
    ),
  },
};

export const Medium: Story = {
  args: {
    intensity: "medium",
    children: (
      <div className="p-8 bg-[var(--color-surface-0)]">
        <h2 className="text-2xl font-bold font-[var(--font-heading)] text-[var(--color-text-primary)] mb-3">
          Paper Texture — Medium
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)] leading-relaxed">
          A slightly more visible noise overlay for areas that need more tactile
          character, such as featured sections or hero areas.
        </p>
      </div>
    ),
  },
};
