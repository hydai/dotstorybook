import type { Meta, StoryObj } from "@storybook/react";
import { artDecoDecorator } from "../../storyDecorator";

const ColorSwatch = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => (
  <div className="flex items-center gap-4">
    <div
      className="h-12 w-12 border border-[var(--color-border)]"
      style={{ backgroundColor: value }}
    />
    <div>
      <p className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider">
        {name}
      </p>
      <p className="text-xs text-[var(--color-text-muted)]">{value}</p>
    </div>
  </div>
);

function ColorsShowcase() {
  const sections = [
    {
      title: "SURFACE",
      colors: [
        { name: "Surface 0 — Obsidian", value: "#0A0A0A" },
        { name: "Surface 1 — Onyx", value: "#141414" },
        { name: "Surface 2 — Charcoal", value: "#1E1E1E" },
        { name: "Surface 3 — Slate", value: "#2A2A2A" },
      ],
    },
    {
      title: "TEXT",
      colors: [
        { name: "Primary — Champagne Cream", value: "#F2F0E4" },
        { name: "Secondary — Warm Ivory", value: "#C0BDA8" },
        { name: "Muted — Pewter", value: "#888888" },
        { name: "Inverse — Obsidian", value: "#0A0A0A" },
      ],
    },
    {
      title: "ACCENT",
      colors: [
        { name: "Gold — Metallic", value: "#D4AF37" },
        { name: "Gold — Hover", value: "#E0C352" },
        { name: "Midnight Blue", value: "#1E3D59" },
      ],
    },
    {
      title: "BORDER",
      colors: [
        { name: "Default (30%)", value: "rgba(212, 175, 55, 0.3)" },
        { name: "Hover (100%)", value: "rgba(212, 175, 55, 1)" },
        { name: "Accent (60%)", value: "rgba(212, 175, 55, 0.6)" },
      ],
    },
    {
      title: "SEMANTIC",
      colors: [
        { name: "Success", value: "#4CAF50" },
        { name: "Warning", value: "#D4AF37" },
        { name: "Error", value: "#C62828" },
      ],
    },
  ];

  return (
    <div className="space-y-8 max-w-lg">
      {sections.map((section) => (
        <div key={section.title}>
          <h2
            className="text-lg font-normal text-[var(--color-accent)] mb-4 uppercase tracking-[0.2em] font-[var(--font-heading)]"
            style={{
              textShadow:
                "0 0 10px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.15)",
            }}
          >
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
  title: "Art Deco/Foundation/Colors",
  component: ColorsShowcase,
  decorators: [artDecoDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ColorsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
