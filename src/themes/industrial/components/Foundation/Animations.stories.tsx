import type { Meta, StoryObj } from "@storybook/react";
import { industrialDecorator } from "../../storyDecorator";
import { shadows } from "../../tokens";

function AnimationsShowcase() {
  return (
    <div className="space-y-12 max-w-lg">
      {/* LED Pulse */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          LED Pulse
        </h2>
        <div className="flex gap-6 items-center">
          {[
            { color: "#ff4757", glow: shadows.ledGlow.red, label: "Red" },
            { color: "#2ed573", glow: shadows.ledGlow.green, label: "Green" },
            { color: "#ffa502", glow: shadows.ledGlow.amber, label: "Amber" },
            { color: "#70a1ff", glow: shadows.ledGlow.blue, label: "Blue" },
          ].map((led) => (
            <div key={led.label} className="flex flex-col items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: led.color,
                  boxShadow: led.glow,
                  animation:
                    "industrial-led-pulse 2s ease-in-out infinite",
                }}
              />
              <span className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)] uppercase">
                {led.label}
              </span>
            </div>
          ))}
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          LED indicators with colored glow and pulse animation
        </p>
      </div>

      {/* Mechanical Press */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Mechanical Press
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] mb-4 font-[var(--font-body)]">
          Click the button to see the mechanical press animation — translateY(2px) +
          shadow inversion from raised to pressed.
        </p>
        <button
          className="h-12 px-7 text-sm font-medium text-white bg-[#ff4757] rounded-[var(--radius-md)] uppercase tracking-[0.15em] font-[var(--font-mono)] transition-all duration-150 active:translate-y-0.5"
          style={{
            boxShadow: shadows.button,
          }}
          onMouseDown={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              shadows.pressed;
          }}
          onMouseUp={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              shadows.button;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              shadows.button;
          }}
        >
          Press Me
        </button>
      </div>

      {/* Shadow Pulse */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Shadow Pulse
        </h2>
        <div
          className="h-20 w-40 rounded-[var(--radius-lg)] bg-[var(--color-surface-0)] flex items-center justify-center"
          style={{
            animation: "industrial-shadow-pulse 4s ease-in-out infinite",
          }}
        >
          <span className="text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-body)]">
            Pulsing
          </span>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          Shadow intensity oscillation — subtle depth breathing
        </p>
      </div>

      {/* Ping */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Ping
        </h2>
        <div className="flex gap-6 items-center">
          {[
            { color: "bg-[#ff4757]", label: "Alert" },
            { color: "bg-[#2ed573]", label: "Active" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span
                  className={`absolute inline-flex h-full w-full rounded-full ${item.color} opacity-75`}
                  style={{
                    animation:
                      "industrial-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                  }}
                />
                <span
                  className={`relative inline-flex h-3 w-3 rounded-full ${item.color}`}
                />
              </span>
              <span className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)] uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Industrial/Foundation/Animations",
  component: AnimationsShowcase,
  decorators: [industrialDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof AnimationsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
