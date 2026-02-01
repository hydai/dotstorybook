import type { Meta, StoryObj } from "@storybook/react";
import { cyberpunkDecorator } from "../../storyDecorator";

const ColorSwatch = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => (
  <div className="flex items-center gap-4">
    <div
      className="h-12 w-12 border border-[var(--color-border)] cyber-chamfer-sm"
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
        { name: "Surface 0", value: "#0a0a0f" },
        { name: "Surface 1", value: "#12121f" },
        { name: "Surface 2", value: "#1a1a2e" },
        { name: "Surface 3", value: "#252540" },
      ],
    },
    {
      title: "TEXT",
      colors: [
        { name: "Primary", value: "#e0e0e0" },
        { name: "Secondary", value: "#a0a0b0" },
        { name: "Muted", value: "#6b7280" },
        { name: "Inverse", value: "#0a0a0f" },
      ],
    },
    {
      title: "ACCENT",
      colors: [
        { name: "Green (Primary)", value: "#00ff88" },
        { name: "Magenta (Secondary)", value: "#ff00ff" },
        { name: "Cyan (Tertiary)", value: "#00d4ff" },
      ],
    },
    {
      title: "SEMANTIC",
      colors: [
        { name: "Success", value: "#00ff88" },
        { name: "Warning", value: "#ffb000" },
        { name: "Error", value: "#ff3366" },
      ],
    },
    {
      title: "BORDER",
      colors: [
        { name: "Default", value: "#2a2a3a" },
        { name: "Hover", value: "rgba(0, 255, 136, 0.3)" },
        { name: "Accent", value: "rgba(0, 255, 136, 0.6)" },
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
                "0 0 10px rgba(0, 255, 136, 0.4), 0 0 20px rgba(0, 255, 136, 0.2)",
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
  title: "Cyberpunk/Foundation/Colors",
  component: ColorsShowcase,
  decorators: [cyberpunkDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ColorsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
