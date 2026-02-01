import type { Meta, StoryObj } from "@storybook/react";
import { clayDecorator } from "../../storyDecorator";

const ColorSwatch = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => (
  <div className="flex items-center gap-4">
    <div
      className="h-12 w-12 rounded-2xl"
      style={{
        backgroundColor: value,
        boxShadow:
          "4px 4px 8px rgba(166, 152, 190, 0.2), -3px -3px 6px rgba(255, 255, 255, 0.7)",
      }}
    />
    <div>
      <p className="text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-body)]">
        {name}
      </p>
      <p className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)]">
        {value}
      </p>
    </div>
  </div>
);

function ColorsShowcase() {
  const sections = [
    {
      title: "Surface",
      colors: [
        { name: "Surface 0 (Canvas)", value: "#F4F1FA" },
        { name: "Surface 1 (Card)", value: "rgba(255, 255, 255, 0.8)" },
        { name: "Surface 2 (Recessed)", value: "#EFEBF5" },
        { name: "Surface 3 (Deeper)", value: "#E7E2F0" },
      ],
    },
    {
      title: "Text",
      colors: [
        { name: "Primary", value: "#332F3A" },
        { name: "Secondary", value: "#635F69" },
        { name: "Muted", value: "#635F69" },
        { name: "Inverse", value: "#F4F1FA" },
      ],
    },
    {
      title: "Brand",
      colors: [
        { name: "Accent (Violet)", value: "#7C3AED" },
        { name: "Secondary (Pink)", value: "#DB2777" },
        { name: "Tertiary (Sky)", value: "#0EA5E9" },
      ],
    },
    {
      title: "Candy Palette",
      colors: [
        { name: "Violet", value: "#A78BFA" },
        { name: "Pink", value: "#F472B6" },
        { name: "Sky", value: "#38BDF8" },
        { name: "Emerald", value: "#34D399" },
        { name: "Amber", value: "#FBBF24" },
      ],
    },
    {
      title: "Semantic",
      colors: [
        { name: "Success", value: "#10B981" },
        { name: "Warning", value: "#F59E0B" },
        { name: "Error", value: "#EF4444" },
      ],
    },
  ];

  return (
    <div className="space-y-8 max-w-lg">
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
            {section.title}
          </h2>
          <div className="space-y-3">
            {section.colors.map((color) => (
              <ColorSwatch key={color.name} {...color} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const meta = {
  title: "Clay/Foundation/Colors",
  component: ColorsShowcase,
  decorators: [clayDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ColorsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
