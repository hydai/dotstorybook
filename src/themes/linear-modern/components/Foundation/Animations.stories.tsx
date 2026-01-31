import type { Meta, StoryObj } from "@storybook/react";

function AnimationsShowcase() {
  return (
    <div className="space-y-12 max-w-lg">
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
          Float
        </h2>
        <div className="flex justify-center">
          <div
            className="h-16 w-16 rounded-[var(--radius-lg)] bg-[var(--color-accent)]"
            style={{ animation: "float 4s ease-in-out infinite" }}
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
          Shimmer
        </h2>
        <div className="flex justify-center">
          <div
            className="h-8 w-48 rounded-[var(--radius-full)]"
            style={{
              background:
                "linear-gradient(90deg, var(--color-gradient-start), var(--color-gradient-mid), var(--color-gradient-start))",
              backgroundSize: "200% auto",
              animation: "shimmer 3s linear infinite",
            }}
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
          Pulse Glow
        </h2>
        <div className="flex justify-center">
          <div
            className="h-16 w-16 rounded-full bg-[var(--color-accent)]"
            style={{
              animation: "pulse-glow 3s ease-in-out infinite",
              boxShadow: "var(--shadow-glow-lg)",
            }}
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
          Fade In
        </h2>
        <div className="flex justify-center">
          <div
            className="h-12 w-32 rounded-[var(--radius-md)] bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center text-sm text-[var(--color-text-secondary)]"
            style={{ animation: "fade-in 1s ease-out forwards" }}
          >
            Hello
          </div>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Linear Modern/Foundation/Animations",
  component: AnimationsShowcase,
  parameters: { layout: "padded" },
} satisfies Meta<typeof AnimationsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
