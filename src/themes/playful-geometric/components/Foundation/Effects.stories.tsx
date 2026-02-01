import type { Meta, StoryObj } from "@storybook/react";
import { playfulGeometricDecorator } from "../../storyDecorator";
import { shadows } from "../../tokens";

function ShadowDemo({ name, shadow }: { name: string; shadow: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="h-20 w-20 rounded-[var(--radius-md)] border-2 border-[var(--color-text-primary)] bg-[var(--color-surface-1)]"
        style={{ boxShadow: shadow }}
      />
      <span className="font-[var(--font-heading)] text-xs font-bold text-[var(--color-text-primary)]">
        {name}
      </span>
    </div>
  );
}

const meta = {
  title: "Playful Geometric/Foundation/Effects",
  decorators: [playfulGeometricDecorator],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const HardShadows: Story = {
  render: () => (
    <div className="max-w-3xl p-8">
      <h2 className="font-[var(--font-heading)] text-3xl font-extrabold text-[var(--color-text-primary)] mb-6">
        Hard Shadows
      </h2>
      <div className="grid grid-cols-4 gap-8 mb-8">
        <ShadowDemo name="Small" shadow={shadows.sm} />
        <ShadowDemo name="Medium" shadow={shadows.md} />
        <ShadowDemo name="Large" shadow={shadows.lg} />
        <ShadowDemo name="Active" shadow={shadows.active} />
      </div>

      <h3 className="font-[var(--font-heading)] text-xl font-bold text-[var(--color-text-primary)] mb-4">
        Colored Shadows
      </h3>
      <div className="grid grid-cols-4 gap-8">
        <ShadowDemo name="Accent" shadow={shadows.accent} />
        <ShadowDemo name="Secondary" shadow={shadows.secondary} />
        <ShadowDemo name="Tertiary" shadow={shadows.tertiary} />
        <ShadowDemo name="Quaternary" shadow={shadows.quaternary} />
      </div>
    </div>
  ),
};

export const DotGridPatterns: Story = {
  render: () => (
    <div className="max-w-3xl p-8">
      <h2 className="font-[var(--font-heading)] text-3xl font-extrabold text-[var(--color-text-primary)] mb-6">
        Dot Grid Patterns
      </h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col items-center gap-3">
          <div className="pg-dot-grid-overlay h-40 w-full rounded-[var(--radius-md)] border-2 border-[var(--color-text-primary)] bg-[var(--color-surface-0)]" />
          <span className="font-[var(--font-heading)] text-xs font-bold text-[var(--color-text-primary)]">
            Default (24px)
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="pg-dot-grid-overlay-dense h-40 w-full rounded-[var(--radius-md)] border-2 border-[var(--color-text-primary)] bg-[var(--color-surface-0)]" />
          <span className="font-[var(--font-heading)] text-xs font-bold text-[var(--color-text-primary)]">
            Dense (16px)
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="pg-dot-grid-overlay-colorful h-40 w-full rounded-[var(--radius-md)] border-2 border-[var(--color-text-primary)] bg-[var(--color-surface-0)]" />
          <span className="font-[var(--font-heading)] text-xs font-bold text-[var(--color-text-primary)]">
            Colorful (Violet + Pink)
          </span>
        </div>
      </div>
    </div>
  ),
};

export const ConfettiShapes: Story = {
  render: () => (
    <div className="max-w-3xl p-8">
      <h2 className="font-[var(--font-heading)] text-3xl font-extrabold text-[var(--color-text-primary)] mb-6">
        Confetti Shape Vocabulary
      </h2>
      <div className="flex gap-8 items-end">
        <div className="flex flex-col items-center gap-3">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="20" fill="#8B5CF6" stroke="#1E293B" strokeWidth="2" />
          </svg>
          <span className="font-[var(--font-heading)] text-xs font-bold text-[var(--color-text-primary)]">
            Circle
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <polygon points="30,8 52,52 8,52" fill="#F472B6" stroke="#1E293B" strokeWidth="2" />
          </svg>
          <span className="font-[var(--font-heading)] text-xs font-bold text-[var(--color-text-primary)]">
            Triangle
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <rect x="10" y="10" width="40" height="40" rx="4" fill="#FBBF24" stroke="#1E293B" strokeWidth="2" />
          </svg>
          <span className="font-[var(--font-heading)] text-xs font-bold text-[var(--color-text-primary)]">
            Square
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="20" fill="#34D399" stroke="#1E293B" strokeWidth="2" />
          </svg>
          <span className="font-[var(--font-heading)] text-xs font-bold text-[var(--color-text-primary)]">
            Mint Circle
          </span>
        </div>
      </div>
    </div>
  ),
};
