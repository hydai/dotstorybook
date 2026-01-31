import type { Meta, StoryObj } from "@storybook/react";
import { boldTypographyDecorator } from "../../storyDecorator";

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
      <p className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wide">
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
        { name: "Surface 0 — Background", value: "#0A0A0A" },
        { name: "Surface 1", value: "#0F0F0F" },
        { name: "Surface 2 — Muted", value: "#1A1A1A" },
        { name: "Surface 3 — Elevated", value: "#262626" },
      ],
    },
    {
      title: "TEXT",
      colors: [
        { name: "Primary — Off White", value: "#FAFAFA" },
        { name: "Secondary", value: "#737373" },
        { name: "Muted", value: "#737373" },
        { name: "Inverse — Rich Black", value: "#0A0A0A" },
      ],
    },
    {
      title: "ACCENT",
      colors: [
        { name: "Accent — Vermillion", value: "#FF3D00" },
        { name: "Accent Hover", value: "#FF5722" },
        { name: "Accent Muted", value: "rgba(255, 61, 0, 0.15)" },
      ],
    },
    {
      title: "SEMANTIC",
      colors: [
        { name: "Success", value: "#22c55e" },
        { name: "Warning", value: "#eab308" },
        { name: "Error", value: "#ef4444" },
      ],
    },
    {
      title: "BORDER",
      colors: [
        { name: "Default", value: "#262626" },
        { name: "Hover", value: "#404040" },
        { name: "Accent", value: "#FF3D00" },
      ],
    },
  ];

  return (
    <div className="space-y-10 max-w-lg">
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tight">
            {section.title}
          </h2>
          <div className="space-y-4">
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
  title: "Bold Typography/Foundation/Colors",
  component: ColorsShowcase,
  decorators: [boldTypographyDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ColorsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
