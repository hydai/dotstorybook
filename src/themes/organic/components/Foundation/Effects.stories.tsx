import type { Meta, StoryObj } from "@storybook/react";
import { organicDecorator } from "../../storyDecorator";

function EffectsShowcase() {
  return (
    <div className="space-y-12 max-w-2xl">
      {/* Shadows */}
      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Shadows (Moss & Clay Tinted)
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            { name: "Subtle", shadow: "0 1px 4px rgba(93,112,82,0.06)" },
            {
              name: "Card",
              shadow:
                "0 2px 12px -2px rgba(93,112,82,0.1), 0 4px 24px -4px rgba(93,112,82,0.08)",
            },
            { name: "Soft", shadow: "0 4px 20px -2px rgba(93,112,82,0.15)" },
            {
              name: "Card Hover",
              shadow:
                "0 8px 30px -4px rgba(93,112,82,0.18), 0 12px 48px -8px rgba(193,140,93,0.12)",
            },
            {
              name: "Float",
              shadow: "0 10px 40px -10px rgba(193,140,93,0.2)",
            },
            {
              name: "Inner",
              shadow: "inset 0 1px 3px rgba(93,112,82,0.06)",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-[var(--color-surface-1)] rounded-[2rem] p-6 flex flex-col items-center justify-center gap-2"
              style={{ boxShadow: item.shadow }}
            >
              <p className="text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-body)]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Blob Shapes */}
      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Blob Shape
        </h2>
        <div className="flex gap-6 items-center">
          <div className="w-24 h-24 bg-[var(--color-accent)] organic-blob-shape opacity-60" />
          <div className="w-24 h-24 bg-[var(--color-secondary)] organic-blob-shape opacity-60" />
          <div className="w-24 h-24 bg-[var(--color-surface-3)] organic-blob-shape" />
        </div>
      </section>

      {/* Asymmetric Radii */}
      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Asymmetric Card Radii
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className={`organic-radius-${n} bg-[var(--color-surface-1)] border border-[var(--color-border)] p-6 flex items-center justify-center`}
            >
              <p className="text-sm font-medium text-[var(--color-text-primary)] font-[var(--font-body)]">
                Radius {n}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pill Shape */}
      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Pill Shape
        </h2>
        <div className="flex gap-4 items-center">
          <div className="rounded-full bg-[var(--color-accent)] text-[var(--color-text-inverse)] px-8 py-3 text-sm font-semibold font-[var(--font-body)]">
            Pill Button
          </div>
          <div className="rounded-full bg-[var(--color-surface-3)] px-4 py-1 text-xs font-semibold font-[var(--font-body)] text-[var(--color-text-primary)]">
            Pill Badge
          </div>
          <div className="rounded-full bg-white/50 border border-[var(--color-border)] px-5 h-12 flex items-center text-sm text-[var(--color-text-muted)] font-[var(--font-body)]">
            Pill Input
          </div>
        </div>
      </section>

      {/* Radius Scale */}
      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Radius Scale
        </h2>
        <div className="flex gap-4 items-end">
          {[
            { name: "sm", value: "12px" },
            { name: "md", value: "16px" },
            { name: "lg", value: "2rem" },
            { name: "xl", value: "40px" },
            { name: "full", value: "9999px" },
          ].map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-2">
              <div
                className="w-16 h-16 bg-[var(--color-surface-1)] border border-[var(--color-border)]"
                style={{ borderRadius: r.value }}
              />
              <p className="text-xs text-[var(--color-text-muted)] font-[var(--font-body)]">
                {r.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const meta = {
  title: "Organic/Foundation/Effects",
  component: EffectsShowcase,
  decorators: [organicDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof EffectsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
