import type { Meta, StoryObj } from "@storybook/react";
import { cryptoDecorator } from "../../storyDecorator";

function AnimationsShowcase() {
  return (
    <div className="space-y-12 max-w-lg">
      {/* Float */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Float
        </h2>
        <div
          className="h-16 w-16 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F7931A]"
          style={{ animation: "crypto-float 3s ease-in-out infinite" }}
        />
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          Gentle vertical float — used for the orbital hero orb
        </p>
      </div>

      {/* Spin / Orbital */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Orbital Spin
        </h2>
        <div className="flex gap-8 items-center">
          <div className="relative h-24 w-24">
            <div
              className="absolute inset-0 rounded-full border border-[var(--color-accent)]/30"
              style={{ animation: "crypto-spin 4s linear infinite" }}
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </div>
          </div>
          <div className="relative h-24 w-24">
            <div
              className="absolute inset-0 rounded-full border border-[var(--color-tertiary)]/30"
              style={{ animation: "crypto-spin-reverse 6s linear infinite" }}
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[var(--color-tertiary)]" />
            </div>
          </div>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          Orbital rings — clockwise and counter-clockwise
        </p>
      </div>

      {/* Bounce */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Bounce
        </h2>
        <div className="flex gap-4">
          {[0, 0.5, 1, 1.5].map((delay) => (
            <div
              key={delay}
              className="h-12 w-12 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-xs text-[var(--color-accent)] font-[var(--font-mono)]"
              style={{
                animation: `crypto-bounce 2s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}
            >
              {delay}s
            </div>
          ))}
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          Staggered bounce — floating stat cards
        </p>
      </div>

      {/* Glow Pulse */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Glow Pulse
        </h2>
        <div className="flex gap-4">
          <div
            className="h-16 w-32 rounded-2xl border border-[var(--color-accent)]/40 flex items-center justify-center"
            style={{ animation: "crypto-glow-pulse 2s ease-in-out infinite" }}
          >
            <span className="text-xs text-[var(--color-accent)] font-[var(--font-mono)]">
              Orange
            </span>
          </div>
          <div
            className="h-16 w-32 rounded-2xl border border-[var(--color-tertiary)]/40 flex items-center justify-center"
            style={{ animation: "crypto-glow-pulse-gold 2s ease-in-out infinite" }}
          >
            <span className="text-xs text-[var(--color-tertiary)] font-[var(--font-mono)]">
              Gold
            </span>
          </div>
        </div>
      </div>

      {/* Ping */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Ping
        </h2>
        <div className="flex gap-6 items-center">
          <span className="relative flex h-3 w-3">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"
              style={{ animation: "crypto-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite" }}
            />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--color-accent)]" />
          </span>
          <span className="relative flex h-3 w-3">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-success)] opacity-75"
              style={{ animation: "crypto-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite" }}
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
  title: "Crypto/Foundation/Animations",
  component: AnimationsShowcase,
  decorators: [cryptoDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof AnimationsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
