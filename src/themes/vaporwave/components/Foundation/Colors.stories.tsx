import type { Meta, StoryObj } from "@storybook/react";
import { vaporwaveDecorator } from "../../storyDecorator";

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
      <p className="text-sm font-bold text-[var(--color-text-primary)] uppercase font-[var(--font-label)]">
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
      title: "SURFACE",
      colors: [
        { name: "Surface 0", value: "#090014" },
        { name: "Surface 1", value: "#120026" },
        { name: "Surface 2", value: "#1a0038" },
        { name: "Surface 3", value: "#26004d" },
      ],
    },
    {
      title: "TEXT",
      colors: [
        { name: "Primary", value: "#e0d0ff" },
        { name: "Secondary", value: "#a090c0" },
        { name: "Muted", value: "#6b5b8a" },
        { name: "Inverse", value: "#090014" },
      ],
    },
    {
      title: "ACCENT",
      colors: [
        { name: "Magenta (Primary)", value: "#FF00FF" },
        { name: "Cyan (Secondary)", value: "#00FFFF" },
        { name: "Orange (Tertiary)", value: "#FF9900" },
      ],
    },
    {
      title: "SEMANTIC",
      colors: [
        { name: "Success", value: "#00FFFF" },
        { name: "Warning", value: "#FF9900" },
        { name: "Error", value: "#FF3366" },
      ],
    },
    {
      title: "BORDER",
      colors: [
        { name: "Default", value: "#2a1a4a" },
        { name: "Hover", value: "rgba(255, 0, 255, 0.3)" },
        { name: "Accent", value: "rgba(255, 0, 255, 0.6)" },
      ],
    },
  ];

  return (
    <div className="space-y-8 max-w-lg">
      {sections.map((section) => (
        <div key={section.title}>
          <h2
            className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest font-[var(--font-heading)]"
            style={{
              textShadow:
                "0 0 10px rgba(255, 0, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.2)",
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
  title: "Vaporwave/Foundation/Colors",
  component: ColorsShowcase,
  decorators: [vaporwaveDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ColorsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
