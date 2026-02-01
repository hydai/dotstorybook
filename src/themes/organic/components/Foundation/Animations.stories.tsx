import type { Meta, StoryObj } from "@storybook/react";
import { motion } from "motion/react";
import { organicDecorator } from "../../storyDecorator";
import { transitions } from "../../tokens";

function AnimationsShowcase() {
  return (
    <div className="space-y-12 max-w-2xl">
      {/* CSS Keyframes */}
      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          CSS Keyframe Animations
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-[var(--color-accent)] organic-blob-shape opacity-60 animate-[organic-float_8s_ease-in-out_infinite]" />
            <p className="text-xs text-[var(--color-text-muted)] font-[var(--font-body)]">
              Float (8s)
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-[var(--color-secondary)] organic-blob-shape opacity-60 animate-[organic-breathe_4s_ease-in-out_infinite]" />
            <p className="text-xs text-[var(--color-text-muted)] font-[var(--font-body)]">
              Breathe (4s)
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-[var(--color-surface-3)] rounded-lg animate-[organic-sway_4s_ease-in-out_infinite]" />
            <p className="text-xs text-[var(--color-text-muted)] font-[var(--font-body)]">
              Sway (4s)
            </p>
          </div>
        </div>
      </section>

      {/* Hover Scale */}
      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Hover Scale (Spring)
        </h2>
        <div className="flex gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={transitions.fast}
            className="w-24 h-24 bg-[var(--color-accent)] rounded-full flex items-center justify-center cursor-pointer"
            style={{
              boxShadow: "0 4px 20px -2px rgba(93,112,82,0.3)",
            }}
          >
            <span className="text-xs font-semibold text-[var(--color-text-inverse)] font-[var(--font-body)]">
              Hover
            </span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={transitions.fast}
            className="w-24 h-24 bg-[var(--color-secondary)] rounded-full flex items-center justify-center cursor-pointer"
            style={{
              boxShadow: "0 4px 20px -2px rgba(193,140,93,0.3)",
            }}
          >
            <span className="text-xs font-semibold text-[var(--color-text-inverse)] font-[var(--font-body)]">
              Hover
            </span>
          </motion.div>
        </div>
      </section>

      {/* Card Lift */}
      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Card Lift Hover
        </h2>
        <motion.div
          whileHover={{ y: -4 }}
          whileTap={{ y: 0 }}
          transition={transitions.slow}
          className="bg-[var(--color-surface-1)] rounded-[2rem] p-8 organic-hover-bloom cursor-pointer max-w-sm"
          style={{
            boxShadow:
              "0 2px 12px -2px rgba(93,112,82,0.1), 0 4px 24px -4px rgba(93,112,82,0.08)",
          }}
        >
          <p className="text-sm text-[var(--color-text-primary)] font-[var(--font-body)]">
            Hover to lift with moss-tinted shadow bloom
          </p>
        </motion.div>
      </section>

      {/* Spring Transitions */}
      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Spring Transitions
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {(
            [
              { name: "Fast", key: "fast" },
              { name: "Base", key: "base" },
              { name: "Slow", key: "slow" },
              { name: "Gentle", key: "gentle" },
            ] as const
          ).map((item) => (
            <motion.div
              key={item.key}
              whileHover={{ scale: 1.1 }}
              transition={transitions[item.key]}
              className="bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-[2rem] p-4 flex items-center justify-center cursor-pointer"
            >
              <p className="text-xs font-medium text-[var(--color-text-primary)] font-[var(--font-body)]">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

const meta = {
  title: "Organic/Foundation/Animations",
  component: AnimationsShowcase,
  decorators: [organicDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof AnimationsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
