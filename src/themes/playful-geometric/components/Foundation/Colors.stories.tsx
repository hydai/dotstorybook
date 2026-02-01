import type { Meta, StoryObj } from "@storybook/react";
import { playfulGeometricDecorator } from "../../storyDecorator";
import { colors } from "../../tokens";

function Swatch({ name, color }: { name: string; color: string }) {
  const isLight =
    color === "#FFFDF5" ||
    color === "#FFFFFF" ||
    color === "#F1F5F9" ||
    color === "#E2E8F0" ||
    color === "#FBBF24" ||
    color === "#34D399" ||
    color.startsWith("rgba");

  return (
    <div className="flex flex-col gap-1">
      <div
        className="h-20 w-full rounded-[var(--radius-md)] border-2 border-[var(--color-text-primary)] shadow-[var(--shadow-sm)]"
        style={{ backgroundColor: color }}
      >
        <div className="flex h-full items-end p-2">
          <span
            className="font-[var(--font-body)] text-[10px] font-semibold"
            style={{ color: isLight ? "#1E293B" : "#FFFFFF" }}
          >
            {color}
          </span>
        </div>
      </div>
      <span className="font-[var(--font-heading)] text-xs font-bold text-[var(--color-text-primary)]">
        {name}
      </span>
    </div>
  );
}

function ColorSection({ title, swatches }: { title: string; swatches: { name: string; color: string }[] }) {
  return (
    <div className="mb-8">
      <h3 className="font-[var(--font-heading)] text-lg font-bold text-[var(--color-text-primary)] mb-3 border-b-2 border-[var(--color-text-primary)] pb-1">
        {title}
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {swatches.map((s) => (
          <Swatch key={s.name} name={s.name} color={s.color} />
        ))}
      </div>
    </div>
  );
}

const meta = {
  title: "Playful Geometric/Foundation/Colors",
  decorators: [playfulGeometricDecorator],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const FullPalette: Story = {
  render: () => (
    <div className="max-w-3xl p-8">
      <h2 className="font-[var(--font-heading)] text-3xl font-extrabold text-[var(--color-text-primary)] mb-6">
        Color Palette
      </h2>

      <ColorSection
        title="Surfaces"
        swatches={[
          { name: "Cream (0)", color: colors.surface[0] },
          { name: "White (1)", color: colors.surface[1] },
          { name: "Mist (2)", color: colors.surface[2] },
          { name: "Fog (3)", color: colors.surface[3] },
        ]}
      />

      <ColorSection
        title="Text"
        swatches={[
          { name: "Primary", color: colors.text.primary },
          { name: "Secondary", color: colors.text.secondary },
          { name: "Muted", color: colors.text.muted },
          { name: "Inverse", color: colors.text.inverse },
        ]}
      />

      <ColorSection
        title="Accents"
        swatches={[
          { name: "Vivid Violet", color: colors.accent.DEFAULT },
          { name: "Hot Pink", color: colors.secondary.DEFAULT },
          { name: "Amber", color: colors.tertiary.DEFAULT },
          { name: "Mint", color: colors.quaternary.DEFAULT },
        ]}
      />

      <ColorSection
        title="Semantic"
        swatches={[
          { name: "Success", color: colors.semantic.success },
          { name: "Warning", color: colors.semantic.warning },
          { name: "Error", color: colors.semantic.error },
        ]}
      />

      <ColorSection
        title="Borders"
        swatches={[
          { name: "Default", color: colors.border.DEFAULT },
          { name: "Hover", color: colors.border.hover },
          { name: "Accent", color: colors.border.accent },
        ]}
      />
    </div>
  ),
};
