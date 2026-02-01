import type { Meta, StoryObj } from "@storybook/react";
import { simpleDarkDecorator } from "../../storyDecorator";
import { glows } from "../../tokens";

function GlowsShowcase() {
  const glowEntries = [
    { name: "Small", key: "sm" as const, description: "Subtle accent glow" },
    { name: "Medium", key: "md" as const, description: "Standard glow" },
    { name: "Large", key: "lg" as const, description: "Hero-level glow" },
    {
      name: "Border Glow",
      key: "borderGlow" as const,
      description: "Card border accent",
    },
  ];

  return (
    <div className="space-y-8 max-w-lg">
      <h2 className="text-lg font-semibold text-[var(--color-text-primary)] tracking-tight font-[var(--font-heading)]">
        Amber Glow Effects
      </h2>
      <div className="space-y-6">
        {glowEntries.map((entry) => (
          <div key={entry.key} className="flex items-center gap-6">
            <div
              className="w-20 h-20 rounded-[var(--radius-lg)] bg-[var(--color-surface-2)] border border-[var(--color-border)]"
              style={{ boxShadow: glows[entry.key] }}
            />
            <div>
              <p className="text-sm font-medium text-[var(--color-text-primary)] font-[var(--font-sans)]">
                {entry.name}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] font-[var(--font-sans)]">
                {entry.description}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)] mt-1 max-w-xs break-all">
                {glows[entry.key]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta = {
  title: "Simple Dark/Foundation/Glows",
  component: GlowsShowcase,
  decorators: [simpleDarkDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof GlowsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
