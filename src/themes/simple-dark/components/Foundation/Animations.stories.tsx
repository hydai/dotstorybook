import type { Meta, StoryObj } from "@storybook/react";
import { motion } from "motion/react";
import { simpleDarkDecorator } from "../../storyDecorator";

function AnimationsShowcase() {
  return (
    <div className="space-y-12 max-w-lg">
      {/* Float */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 tracking-tight font-[var(--font-heading)]">
          Float
        </h2>
        <div
          className="w-16 h-16 rounded-[var(--radius-lg)] bg-[var(--color-accent)]"
          style={{ animation: "sd-float 3s ease-in-out infinite" }}
        />
      </div>

      {/* Pulse Glow */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 tracking-tight font-[var(--font-heading)]">
          Pulse Glow
        </h2>
        <div className="flex items-center gap-4">
          <div
            className="w-3 h-3 rounded-full bg-[var(--color-accent)]"
            style={{ animation: "sd-pulse-glow 2s ease-in-out infinite" }}
          />
          <span className="text-sm text-[var(--color-text-secondary)] font-[var(--font-sans)]">
            Pulsing amber glow dot
          </span>
        </div>
      </div>

      {/* Shimmer */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 tracking-tight font-[var(--font-heading)]">
          Shimmer
        </h2>
        <div
          className="h-4 w-48 rounded-[var(--radius-md)]"
          style={{
            background:
              "linear-gradient(90deg, var(--color-surface-2) 25%, var(--color-surface-3) 50%, var(--color-surface-2) 75%)",
            backgroundSize: "200% 100%",
            animation: "sd-shimmer 2s linear infinite",
          }}
        />
      </div>

      {/* Fade In */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 tracking-tight font-[var(--font-heading)]">
          Fade In Up (Motion)
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-4 rounded-[var(--radius-lg)] bg-[var(--color-surface-2)] border border-[var(--color-border)]"
        >
          <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-sans)]">
            This element faded in with a vertical slide.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

const meta = {
  title: "Simple Dark/Foundation/Animations",
  component: AnimationsShowcase,
  decorators: [simpleDarkDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof AnimationsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
