import type { Meta, StoryObj } from "@storybook/react";
import { SpotlightCard } from "./SpotlightCard";

const meta = {
  title: "Linear Modern/Components/SpotlightCard",
  component: SpotlightCard,
  argTypes: {
    spotlightColor: { control: "color" },
  },
} satisfies Meta<typeof SpotlightCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
          Spotlight Card
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Hover over this card to see the mouse-tracking radial gradient
          spotlight effect.
        </p>
      </div>
    ),
  },
};

export const PurpleSpotlight: Story = {
  args: {
    spotlightColor: "rgba(168, 85, 247, 0.15)",
    children: (
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
          Purple Spotlight
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Custom spotlight color using the gradient mid-point purple.
        </p>
      </div>
    ),
  },
};

export const CardGrid: Story = {
  args: { children: "Grid" },
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
      {[
        { title: "Analytics", desc: "Track your metrics in real-time" },
        { title: "Automation", desc: "Set up workflows effortlessly" },
        { title: "Integrations", desc: "Connect your favorite tools" },
        { title: "Security", desc: "Enterprise-grade protection" },
      ].map((item) => (
        <SpotlightCard key={item.title}>
          <div className="space-y-2">
            <h3 className="font-semibold text-[var(--color-text-primary)]">
              {item.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {item.desc}
            </p>
          </div>
        </SpotlightCard>
      ))}
    </div>
  ),
};
