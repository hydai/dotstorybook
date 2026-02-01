import type { Meta, StoryObj } from "@storybook/react";
import { businessStyleDecorator } from "../../storyDecorator";

function AnimationsShowcase() {
  return (
    <div className="space-y-12 max-w-lg">
      {/* Fade In */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Fade In Up
        </h2>
        <div
          className="p-6 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-[var(--radius-md)]"
          style={{
            animation: "business-fade-in 1s ease-out both",
          }}
        >
          <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
            Elements appear with a subtle 6px upward slide and opacity
            transition. Restrained and professional.
          </p>
        </div>
        <p className="text-xs text-[var(--color-text-muted)] mt-3 font-[var(--font-mono)]">
          business-fade-in — opacity 0→1, translateY 6px→0
        </p>
      </div>

      {/* Rule Extend */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Rule Extend
        </h2>
        <div className="space-y-6">
          <div>
            <div
              className="h-px bg-[var(--color-border)]"
              style={{
                animation: "business-rule-extend 2s ease-out both",
              }}
            />
            <p className="text-xs text-[var(--color-text-muted)] mt-3 font-[var(--font-mono)]">
              Default rule — warm gray
            </p>
          </div>
          <div>
            <div
              className="h-px bg-[var(--color-accent)]"
              style={{
                animation: "business-rule-extend 2s ease-out 0.5s both",
              }}
            />
            <p className="text-xs text-[var(--color-text-muted)] mt-3 font-[var(--font-mono)]">
              Gold rule — 0.5s delay
            </p>
          </div>
        </div>
      </div>

      {/* Gold Shimmer */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Gold Shimmer
        </h2>
        <div className="flex gap-6 items-center">
          <div
            className="h-16 w-16 rounded-[var(--radius-md)] bg-[var(--color-accent)] flex items-center justify-center"
            style={{
              animation: "business-gold-shimmer 3s ease-in-out infinite",
            }}
          >
            <span className="text-xs font-medium text-[var(--color-text-inverse)] font-[var(--font-mono)]">
              Au
            </span>
          </div>
          <div
            className="h-12 w-32 rounded-[var(--radius-md)] bg-[var(--color-accent)] flex items-center justify-center"
            style={{
              animation: "business-gold-shimmer 3s ease-in-out 1s infinite",
            }}
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-inverse)] font-[var(--font-mono)]">
              Premium
            </span>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-muted)] mt-3 font-[var(--font-mono)]">
          business-gold-shimmer — gentle opacity pulse (1 → 0.7 → 1)
        </p>
      </div>

      {/* Stagger Delays */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Stagger Delays
        </h2>
        <div className="flex gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-4 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-[var(--radius-md)] flex items-center justify-center"
              style={{
                animation: "business-fade-in 0.6s ease-out both",
                animationDelay: `${i * 0.15}s`,
              }}
            >
              <span className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)]">
                {i * 150}ms
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-[var(--color-text-muted)] mt-3 font-[var(--font-mono)]">
          Staggered fade-in creates an elegant reveal sequence
        </p>
      </div>
    </div>
  );
}

const meta = {
  title: "Business Style/Foundation/Animations",
  component: AnimationsShowcase,
  decorators: [businessStyleDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof AnimationsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
