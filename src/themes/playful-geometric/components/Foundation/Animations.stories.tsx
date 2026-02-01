import type { Meta, StoryObj } from "@storybook/react";
import { playfulGeometricDecorator } from "../../storyDecorator";

function AnimationDemo({
  name,
  animation,
}: {
  name: string;
  animation: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="h-16 w-16 rounded-[var(--radius-md)] border-2 border-[var(--color-text-primary)] bg-[var(--color-accent)] shadow-[var(--shadow-sm)]"
        style={{ animation }}
      />
      <span className="font-[var(--font-heading)] text-xs font-bold text-[var(--color-text-primary)]">
        {name}
      </span>
    </div>
  );
}

const meta = {
  title: "Playful Geometric/Foundation/Animations",
  decorators: [playfulGeometricDecorator],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const AllAnimations: Story = {
  render: () => (
    <div className="max-w-3xl p-8">
      <h2 className="font-[var(--font-heading)] text-3xl font-extrabold text-[var(--color-text-primary)] mb-6">
        Keyframe Animations
      </h2>
      <div className="grid grid-cols-5 gap-8">
        <AnimationDemo
          name="Pop In"
          animation="pg-pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both"
        />
        <AnimationDemo
          name="Wiggle"
          animation="pg-wiggle 1s ease-in-out infinite"
        />
        <AnimationDemo
          name="Bounce"
          animation="pg-bounce 1s ease-in-out infinite"
        />
        <AnimationDemo
          name="Confetti Float"
          animation="pg-confetti-float 3s ease-in-out infinite alternate"
        />
        <AnimationDemo
          name="Fade In Up"
          animation="pg-fade-in-up 0.6s ease-out both"
        />
      </div>
      <div className="mt-8 rounded-[var(--radius-md)] border-2 border-[var(--color-text-primary)] bg-[var(--color-surface-1)] p-4 shadow-[var(--shadow-sm)]">
        <p className="font-[var(--font-body)] text-sm text-[var(--color-text-secondary)]">
          All animations respect <code className="font-mono text-[var(--color-accent)]">prefers-reduced-motion</code> and will be disabled when reduced motion is requested.
        </p>
      </div>
    </div>
  ),
};
