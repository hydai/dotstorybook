import type { Meta, StoryObj } from "@storybook/react";
import { industrialDecorator } from "../../storyDecorator";

const ColorSwatch = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => (
  <div className="flex items-center gap-4">
    <div
      className="h-12 w-12 rounded-[var(--radius-md)]"
      style={{
        backgroundColor: value,
        boxShadow:
          "4px 4px 8px #babecc, -4px -4px 8px #ffffff",
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
        { name: "Surface 0 (Chassis)", value: "#e0e5ec" },
        { name: "Surface 1 (Panel)", value: "#f0f2f5" },
        { name: "Surface 2 (Recessed)", value: "#d1d9e6" },
        { name: "Surface 3 (Deep)", value: "#c8cfd8" },
      ],
    },
    {
      title: "Text",
      colors: [
        { name: "Primary", value: "#2d3436" },
        { name: "Secondary", value: "#4a5568" },
        { name: "Muted", value: "#636e72" },
        { name: "Inverse", value: "#f0f2f5" },
      ],
    },
    {
      title: "Accent",
      colors: [
        { name: "Safety Red", value: "#ff4757" },
        { name: "Safety Red (Hover)", value: "#ff6b81" },
      ],
    },
    {
      title: "LED Indicators",
      colors: [
        { name: "LED Red", value: "#ff4757" },
        { name: "LED Green", value: "#2ed573" },
        { name: "LED Amber", value: "#ffa502" },
        { name: "LED Blue", value: "#70a1ff" },
      ],
    },
    {
      title: "Semantic",
      colors: [
        { name: "Success", value: "#2ed573" },
        { name: "Warning", value: "#ffa502" },
        { name: "Error", value: "#ff4757" },
        { name: "Info", value: "#70a1ff" },
      ],
    },
    {
      title: "Border",
      colors: [
        { name: "Shadow", value: "#babecc" },
        { name: "Light", value: "#ffffff" },
        { name: "Dark", value: "#a3b1c6" },
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
  title: "Industrial/Foundation/Colors",
  component: ColorsShowcase,
  decorators: [industrialDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ColorsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
