import type { Meta, StoryObj } from "@storybook/react";
import { cryptoDecorator } from "../../storyDecorator";

function EffectsShowcase() {
  return (
    <div className="space-y-12 max-w-xl">
      {/* Orange Glow */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Orange Glow
        </h2>
        <div className="flex gap-4">
          <div
            className="h-20 w-40 rounded-2xl bg-[var(--color-surface-1)] border border-white/10 flex items-center justify-center"
            style={{
              boxShadow:
                "0 0 10px rgba(247, 147, 26, 0.4), 0 0 20px rgba(247, 147, 26, 0.2)",
            }}
          >
            <span className="text-xs text-[var(--color-accent)] font-[var(--font-mono)]">
              glow
            </span>
          </div>
          <div
            className="h-20 w-40 rounded-2xl bg-[var(--color-surface-1)] border border-white/10 flex items-center justify-center"
            style={{
              boxShadow:
                "0 0 20px rgba(247, 147, 26, 0.5), 0 0 40px rgba(247, 147, 26, 0.3), 0 0 80px rgba(247, 147, 26, 0.1)",
            }}
          >
            <span className="text-xs text-[var(--color-accent)] font-[var(--font-mono)]">
              glow-lg
            </span>
          </div>
        </div>
      </div>

      {/* Gold Glow */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Gold Glow
        </h2>
        <div className="flex gap-4">
          <div
            className="h-20 w-40 rounded-2xl bg-[var(--color-surface-1)] border border-white/10 flex items-center justify-center"
            style={{
              boxShadow:
                "0 0 10px rgba(255, 214, 0, 0.4), 0 0 20px rgba(255, 214, 0, 0.2)",
            }}
          >
            <span className="text-xs text-[var(--color-tertiary)] font-[var(--font-mono)]">
              gold
            </span>
          </div>
          <div
            className="h-20 w-40 rounded-2xl bg-[var(--color-surface-1)] border border-white/10 flex items-center justify-center"
            style={{
              boxShadow:
                "0 0 20px rgba(255, 214, 0, 0.5), 0 0 40px rgba(255, 214, 0, 0.3), 0 0 80px rgba(255, 214, 0, 0.1)",
            }}
          >
            <span className="text-xs text-[var(--color-tertiary)] font-[var(--font-mono)]">
              gold-lg
            </span>
          </div>
        </div>
      </div>

      {/* Glass Morphism */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Glass Morphism
        </h2>
        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#EA580C]/20 to-[#F7931A]/20">
          <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <p className="text-sm text-[var(--color-text-primary)] font-[var(--font-body)]">
              Frosted glass card with backdrop-blur-lg
            </p>
            <p className="text-xs text-[var(--color-text-muted)] mt-2 font-[var(--font-mono)]">
              bg-black/40 + backdrop-blur-lg + border-white/10
            </p>
          </div>
        </div>
      </div>

      {/* Grid Background */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Blockchain Grid
        </h2>
        <div className="relative h-48 rounded-2xl overflow-hidden bg-[var(--color-surface-0)]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(247, 147, 26, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(247, 147, 26, 0.05) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-[var(--color-text-muted)] font-[var(--font-mono)]">
              50px grid with radial mask fade
            </span>
          </div>
        </div>
      </div>

      {/* Gradient Text */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Gradient Text
        </h2>
        <p className="text-4xl font-bold font-[var(--font-heading)] bg-gradient-to-r from-[#EA580C] via-[#F7931A] to-[#FFD600] bg-clip-text text-transparent">
          The Future of Finance
        </p>
        <p className="text-xs text-[var(--color-text-muted)] mt-2 font-[var(--font-mono)]">
          from-[#EA580C] via-[#F7931A] to-[#FFD600]
        </p>
      </div>
    </div>
  );
}

const meta = {
  title: "Crypto/Foundation/Effects",
  component: EffectsShowcase,
  decorators: [cryptoDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof EffectsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
