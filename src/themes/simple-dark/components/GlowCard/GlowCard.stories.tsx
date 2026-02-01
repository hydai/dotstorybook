import type { Meta, StoryObj } from "@storybook/react";
import { GlowCard } from "./GlowCard";
import { simpleDarkDecorator } from "../../storyDecorator";

const meta = {
  title: "Simple Dark/Components/GlowCard",
  component: GlowCard,
  decorators: [simpleDarkDecorator],
} satisfies Meta<typeof GlowCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="space-y-3">
        <h3 className="text-lg font-semibold font-[var(--font-heading)] text-[var(--color-text-primary)]">
          Mouse-tracking Glow
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Hover and move your mouse to see the amber glow spotlight follow your
          cursor across the card surface.
        </p>
      </div>
    ),
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-2xl">
      <GlowCard>
        <div className="space-y-2">
          <h3 className="text-base font-semibold font-[var(--font-heading)] text-[var(--color-text-primary)]">
            Analytics
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Real-time metrics and performance data.
          </p>
        </div>
      </GlowCard>
      <GlowCard>
        <div className="space-y-2">
          <h3 className="text-base font-semibold font-[var(--font-heading)] text-[var(--color-text-primary)]">
            Integrations
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Connect with your favorite tools.
          </p>
        </div>
      </GlowCard>
      <GlowCard>
        <div className="space-y-2">
          <h3 className="text-base font-semibold font-[var(--font-heading)] text-[var(--color-text-primary)]">
            Security
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Enterprise-grade protection built in.
          </p>
        </div>
      </GlowCard>
      <GlowCard>
        <div className="space-y-2">
          <h3 className="text-base font-semibold font-[var(--font-heading)] text-[var(--color-text-primary)]">
            Automation
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Streamline workflows with AI.
          </p>
        </div>
      </GlowCard>
    </div>
  ),
};
