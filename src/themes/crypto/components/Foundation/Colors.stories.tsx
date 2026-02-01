import type { Meta, StoryObj } from "@storybook/react";
import { cryptoDecorator } from "../../storyDecorator";

const ColorSwatch = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => (
  <div className="flex items-center gap-4">
    <div
      className="h-12 w-12 rounded-xl border border-white/10"
      style={{ backgroundColor: value }}
    />
    <div>
      <p className="text-sm font-medium text-[var(--color-text-primary)] font-[var(--font-body)]">
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
        { name: "Surface 0", value: "#030304" },
        { name: "Surface 1", value: "#0F1115" },
        { name: "Surface 2", value: "#1A1B23" },
        { name: "Surface 3", value: "#252631" },
      ],
    },
    {
      title: "Text",
      colors: [
        { name: "Primary", value: "#E8E8ED" },
        { name: "Secondary", value: "#9CA3AF" },
        { name: "Muted", value: "#6B7280" },
        { name: "Inverse", value: "#030304" },
      ],
    },
    {
      title: "Accent",
      colors: [
        { name: "Bitcoin Orange", value: "#F7931A" },
        { name: "Burnt Orange", value: "#EA580C" },
        { name: "Digital Gold", value: "#FFD600" },
      ],
    },
    {
      title: "Semantic",
      colors: [
        { name: "Success", value: "#22C55E" },
        { name: "Warning", value: "#FBBF24" },
        { name: "Error", value: "#EF4444" },
      ],
    },
    {
      title: "Border",
      colors: [
        { name: "Default", value: "rgba(255, 255, 255, 0.1)" },
        { name: "Hover", value: "rgba(247, 147, 26, 0.3)" },
        { name: "Accent", value: "rgba(247, 147, 26, 0.6)" },
      ],
    },
  ];

  return (
    <div className="space-y-8 max-w-lg">
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
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
  title: "Crypto/Foundation/Colors",
  component: ColorsShowcase,
  decorators: [cryptoDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ColorsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
