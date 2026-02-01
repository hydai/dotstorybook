import type { Meta, StoryObj } from "@storybook/react";
import { neumorphismDecorator } from "../../storyDecorator";

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
            className="h-16 w-16 rounded-[20px] bg-[#E0E5EC]"
            style={{
              animation: "neu-float 3s ease-in-out infinite",
              boxShadow:
                "9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)",
            }}
          />
          <div
            className="h-14 w-14 rounded-[20px] bg-[#E0E5EC]"
            style={{
              animation: "neu-float 3s ease-in-out infinite",
              animationDelay: "0.5s",
              boxShadow:
                "9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)",
            }}
          />
          <div
            className="h-12 w-12 rounded-[20px] bg-[#E0E5EC]"
            style={{
              animation: "neu-float 3s ease-in-out infinite",
              animationDelay: "1s",
              boxShadow:
                "9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)",
            }}
          />
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          Gentle vertical drift (3s cycle) — used for decorative elements
        </p>
      </div>

      {/* Shadow Pulse */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Shadow Pulse
        </h2>
        <div
          className="h-20 w-40 rounded-[20px] bg-[#E0E5EC] flex items-center justify-center"
          style={{ animation: "neu-shadow-pulse 4s ease-in-out infinite" }}
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
              className="h-14 w-14 rounded-2xl bg-[#E0E5EC] flex items-center justify-center text-sm font-semibold text-[var(--color-accent)] font-[var(--font-body)]"
              style={{
                animation: "neu-float 3s ease-in-out infinite",
                animationDelay: `${i * 0.3}s`,
                boxShadow:
                  "5px 5px 10px rgba(163, 177, 198, 0.6), -5px -5px 10px rgba(255, 255, 255, 0.5)",
              }}
            >
              {(i * 0.3).toFixed(1)}s
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
                  "neu-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
              }}
            />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--color-accent)]" />
          </span>
          <span className="relative flex h-3 w-3">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-success)] opacity-75"
              style={{
                animation:
                  "neu-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
              }}
            />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--color-success)]" />
          </span>
          <span className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
            Pulsing dot — badge live indicator
          </span>
        </div>
      </div>

      {/* Motion Spring (description) */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Motion Springs
        </h2>
        <div className="space-y-3">
          <div
            className="p-4 rounded-2xl bg-[#E0E5EC]"
            style={{
              boxShadow:
                "5px 5px 10px rgba(163, 177, 198, 0.6), -5px -5px 10px rgba(255, 255, 255, 0.5)",
            }}
          >
            <p className="text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-body)]">
              smooth
            </p>
            <p className="text-xs text-[var(--color-text-muted)] font-mono">
              spring: stiffness 200, damping 25, 300ms
            </p>
          </div>
          <div
            className="p-4 rounded-2xl bg-[#E0E5EC]"
            style={{
              boxShadow:
                "5px 5px 10px rgba(163, 177, 198, 0.6), -5px -5px 10px rgba(255, 255, 255, 0.5)",
            }}
          >
            <p className="text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-body)]">
              decorative
            </p>
            <p className="text-xs text-[var(--color-text-muted)] font-mono">
              spring: stiffness 120, damping 18, 500ms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Neumorphism/Foundation/Animations",
  component: AnimationsShowcase,
  decorators: [neumorphismDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof AnimationsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
