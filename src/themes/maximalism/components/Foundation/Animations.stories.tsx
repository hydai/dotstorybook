import type { Meta, StoryObj } from "@storybook/react";
import { maximalismDecorator } from "../../storyDecorator";

function AnimationsShowcase() {
  return (
    <div className="space-y-12 max-w-xl">
      {/* Float */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Float
        </h2>
        <div className="flex gap-6 items-center">
          <div
            className="h-16 w-16 rounded-2xl bg-gradient-to-r from-[#FF3AF2] to-[#7B2FFF] max-float"
          />
          <div
            className="h-16 w-16 rounded-2xl bg-gradient-to-r from-[#00F5D4] to-[#FFE600] max-float-reverse"
          />
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          Float & float-reverse — decorative shapes float gently
        </p>
      </div>

      {/* Pulse Glow */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Pulse Glow
        </h2>
        <div
          className="h-16 w-32 rounded-full border-4 border-[#FF3AF2] flex items-center justify-center max-pulse-glow"
        >
          <span className="text-xs text-[#FF3AF2] font-bold font-[var(--font-heading)]">
            4 Colors
          </span>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          Cycles through magenta → cyan → yellow → purple glows
        </p>
      </div>

      {/* Gradient Shift */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Gradient Shift
        </h2>
        <p className="text-4xl font-black font-[var(--font-heading)] max-gradient-text uppercase">
          Animated Text
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          6-color gradient slides across text using background-position
        </p>
      </div>

      {/* Spin Slow */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Spin Slow
        </h2>
        <div className="flex gap-6 items-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="#FFE600" className="max-spin-slow">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
          </svg>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="#FF3AF2" className="max-spin-slow" style={{ animationDirection: "reverse" }}>
            <path d="M12 2L22 12L12 22L2 12z" />
          </svg>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          20-second slow rotation for decorative shapes
        </p>
      </div>

      {/* Wiggle */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Wiggle
        </h2>
        <div className="inline-block text-4xl font-[var(--font-display)] text-[#FF6B35] max-wiggle">
          WIGGLE!
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          Multi-step bouncy rotation — attention-grabbing
        </p>
      </div>

      {/* Bounce Subtle */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Bounce Subtle
        </h2>
        <div className="flex gap-4">
          {[0, 0.4, 0.8, 1.2, 1.6].map((delay) => (
            <div
              key={delay}
              className="h-12 w-12 rounded-xl border-4 border-[#7B2FFF] bg-[rgba(123,47,255,0.15)] flex items-center justify-center max-bounce-subtle"
              style={{ animationDelay: `${delay}s` }}
            >
              <span className="text-xs text-[#7B2FFF] font-bold font-[var(--font-heading)]">
                {delay}s
              </span>
            </div>
          ))}
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          Staggered subtle bounce for rhythmic feel
        </p>
      </div>

      {/* Text Shadows */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Text Shadows
        </h2>
        <p className="text-4xl font-black font-[var(--font-heading)] text-white uppercase max-text-shadow mb-4">
          3-Layer
        </p>
        <p className="text-2xl font-bold font-[var(--font-heading)] text-white uppercase max-text-shadow-sm">
          2-Layer
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 font-[var(--font-body)]">
          Stacked text shadows: magenta → cyan → yellow
        </p>
      </div>
    </div>
  );
}

const meta = {
  title: "Maximalism/Foundation/Animations",
  component: AnimationsShowcase,
  decorators: [maximalismDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof AnimationsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
