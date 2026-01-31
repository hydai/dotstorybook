import type { Meta, StoryObj } from "@storybook/react";

function ShadowsShowcase() {
  const shadows = [
    { name: "Small", token: "var(--shadow-sm)" },
    { name: "Medium", token: "var(--shadow-md)" },
    { name: "Large", token: "var(--shadow-lg)" },
    { name: "Glow", token: "var(--shadow-glow)" },
    { name: "Glow Large", token: "var(--shadow-glow-lg)" },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 max-w-md">
      {shadows.map((shadow) => (
        <div
          key={shadow.name}
          className="rounded-[var(--radius-lg)] bg-[var(--color-surface-1)] border border-[var(--color-border)] p-6"
          style={{ boxShadow: shadow.token }}
        >
          <p className="text-sm font-medium text-[var(--color-text-primary)]">
            {shadow.name}
          </p>
          <p className="text-xs text-[var(--color-text-muted)] font-mono mt-1">
            {shadow.token}
          </p>
        </div>
      ))}
    </div>
  );
}

const meta = {
  title: "Linear Modern/Foundation/Shadows",
  component: ShadowsShowcase,
  parameters: { layout: "padded" },
} satisfies Meta<typeof ShadowsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
