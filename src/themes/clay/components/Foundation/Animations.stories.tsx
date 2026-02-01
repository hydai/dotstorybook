import type { Meta, StoryObj } from "@storybook/react";
import { clayDecorator } from "../../storyDecorator";

function AnimationsShowcase() {
  return (
    <div className="space-y-12 max-w-lg">
      {/* Float */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Float
        </h2>
        <div className="flex gap-6 items-center">
          <div
            className="h-16 w-16 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#7C3AED]"
            style={{
              animation: "clay-float 8s ease-in-out infinite",
              boxShadow:
                "6px 6px 12px rgba(124, 58, 237, 0.2), -4px -4px 10px rgba(255, 255, 255, 0.8)",
            }}
          />
          <div
            className="h-14 w-14 rounded-full bg-gradient-to-br from-[#F9A8D4] to-[#DB2777]"
            style={{
              animation: "clay-float-delayed 10s ease-in-out infinite",
              boxShadow:
                "6px 6px 12px rgba(219, 39, 119, 0.2), -4px -4px 10px rgba(255, 255, 255, 0.8)",
            }}
          />
          <div
            className="h-12 w-12 rounded-full bg-gradient-to-br from-[#7DD3FC] to-[#0EA5E9]"
            style={{
              animation: "clay-float-slow 12s ease-in-out infinite",
              boxShadow:
                "6px 6px 12px rgba(14, 165, 233, 0.2), -4px -4px 10px rgba(255, 255, 255, 0.8)",
            }}
          />
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          Three float variants: standard (8s), delayed (10s), slow (12s)
        </p>
      </div>

      {/* Breathe */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Breathe
        </h2>
        <div
          className="h-24 w-24 rounded-full bg-gradient-to-br from-[#6EE7B7] to-[#10B981] flex items-center justify-center text-white font-bold font-[var(--font-heading)]"
          style={{
            animation: "clay-breathe 6s ease-in-out infinite",
            boxShadow:
              "6px 6px 12px rgba(16, 185, 129, 0.2), -4px -4px 10px rgba(255, 255, 255, 0.8)",
          }}
        >
          42
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          Gentle scale pulse (1 → 1.02) — used for ClayOrb stat displays
        </p>
      </div>

      {/* Shadow Pulse */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Shadow Pulse
        </h2>
        <div
          className="h-20 w-40 rounded-[20px] bg-white/70 flex items-center justify-center"
          style={{ animation: "clay-shadow-pulse 4s ease-in-out infinite" }}
        >
          <span className="text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-body)]">
            Pulsing
          </span>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          Shadow intensity oscillation — subtle depth animation
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
              className="h-14 w-14 rounded-2xl bg-white/70 flex items-center justify-center text-sm font-semibold text-[var(--color-accent)] font-[var(--font-body)]"
              style={{
                animation: "clay-float 6s ease-in-out infinite",
                animationDelay: `${i * 0.5}s`,
                boxShadow:
                  "4px 4px 8px rgba(166, 152, 190, 0.2), -3px -3px 6px rgba(255, 255, 255, 0.7)",
              }}
            >
              {i * 0.5}s
            </div>
          ))}
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          Staggered animation delays create wave-like motion
        </p>
      </div>

      {/* Ping */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Ping
        </h2>
        <div className="flex gap-6 items-center">
          <span className="relative flex h-3 w-3">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"
              style={{
                animation:
                  "clay-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
              }}
            />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--color-accent)]" />
          </span>
          <span className="relative flex h-3 w-3">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-success)] opacity-75"
              style={{
                animation:
                  "clay-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
              }}
            />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--color-success)]" />
          </span>
          <span className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
            Pulsing dot — badge live indicator
          </span>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Clay/Foundation/Animations",
  component: AnimationsShowcase,
  decorators: [clayDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof AnimationsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
