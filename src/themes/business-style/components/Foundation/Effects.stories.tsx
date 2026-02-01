import type { Meta, StoryObj } from "@storybook/react";
import { businessStyleDecorator } from "../../storyDecorator";
import { shadows } from "../../tokens";
import { SectionLabel } from "../SectionLabel";
import { PaperTexture } from "../PaperTexture";

function EffectsShowcase() {
  return (
    <div className="space-y-12 max-w-2xl">
      {/* Paper Texture */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Paper Texture
        </h2>
        <div className="flex gap-6">
          <PaperTexture intensity="subtle">
            <div className="p-6 bg-[var(--color-surface-0)] border border-[var(--color-border)] rounded-[var(--radius-md)]">
              <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
                Subtle texture
              </p>
              <span className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)]">
                opacity: 0.03
              </span>
            </div>
          </PaperTexture>
          <PaperTexture intensity="medium">
            <div className="p-6 bg-[var(--color-surface-0)] border border-[var(--color-border)] rounded-[var(--radius-md)]">
              <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
                Medium texture
              </p>
              <span className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)]">
                opacity: 0.06
              </span>
            </div>
          </PaperTexture>
        </div>
      </div>

      {/* Rule Lines */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Rule Lines
        </h2>
        <div className="space-y-6">
          <div>
            <div className="business-rule-line" />
            <span className="text-xs text-[var(--color-text-muted)] mt-2 inline-block font-[var(--font-mono)]">
              .business-rule-line — warm gray
            </span>
          </div>
          <div>
            <div className="business-rule-line-gold" />
            <span className="text-xs text-[var(--color-text-muted)] mt-2 inline-block font-[var(--font-mono)]">
              .business-rule-line-gold — accent gold
            </span>
          </div>
        </div>
      </div>

      {/* Section Labels */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Section Labels
        </h2>
        <div className="space-y-6">
          <SectionLabel>Market Overview</SectionLabel>
          <SectionLabel goldRules>Featured Analysis</SectionLabel>
        </div>
      </div>

      {/* Card Gold Accent */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Card Gold Accent
        </h2>
        <div className="business-card-gold-accent bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-6">
          <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
            2px gold top border applied via <code className="font-[var(--font-mono)] text-xs">.business-card-gold-accent</code>
          </p>
        </div>
      </div>

      {/* Shadow Presets */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Shadow Presets
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {(
            Object.entries(shadows) as [string, string][]
          ).map(([name, value]) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <div
                className="h-20 w-20 rounded-[var(--radius-md)] bg-[var(--color-surface-1)] border border-[var(--color-border)] flex items-center justify-center"
                style={{ boxShadow: value }}
              />
              <span className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Radius Scale */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Radius Scale
        </h2>
        <div className="flex gap-6 items-end">
          {[
            { label: "sm (2px)", radius: "2px", size: "h-16 w-16" },
            { label: "md (4px)", radius: "4px", size: "h-20 w-20" },
            { label: "lg (6px)", radius: "6px", size: "h-24 w-24" },
            { label: "xl (8px)", radius: "8px", size: "h-28 w-28" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div
                className={`${item.size} bg-[var(--color-surface-1)] border border-[var(--color-border)] flex items-center justify-center`}
                style={{
                  borderRadius: item.radius,
                  boxShadow: shadows.md,
                }}
              />
              <span className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)]">
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
  title: "Business Style/Foundation/Effects",
  component: EffectsShowcase,
  decorators: [businessStyleDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof EffectsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
