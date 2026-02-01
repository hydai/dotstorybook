import type { Meta, StoryObj } from "@storybook/react";
import { neumorphismDecorator } from "../../storyDecorator";

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
          "5px 5px 10px rgba(163, 177, 198, 0.6), -5px -5px 10px rgba(255, 255, 255, 0.5)",
      }}
    />
    <div>
      <p className="text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-body)]">
        {name}
      </p>
      <p className="text-xs text-[var(--color-text-muted)] font-mono">
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
        { name: "Surface 0 (Canvas)", value: "#E0E5EC" },
        { name: "Surface 1 (Card)", value: "#E0E5EC" },
        { name: "Surface 2 (Recessed)", value: "#D1D9E6" },
        { name: "Surface 3 (Deeper)", value: "#C8D0E0" },
      ],
    },
    {
      title: "Text",
      colors: [
        { name: "Primary", value: "#3D4852" },
        { name: "Secondary", value: "#6B7280" },
        { name: "Muted", value: "#9CA3AF" },
        { name: "Inverse", value: "#E0E5EC" },
      ],
    },
    {
      title: "Brand",
      colors: [
        { name: "Accent (Indigo-Violet)", value: "#6C63FF" },
        { name: "Secondary (Teal)", value: "#38B2AC" },
      ],
    },
    {
      title: "Semantic",
      colors: [
        { name: "Success", value: "#48BB78" },
        { name: "Warning", value: "#ECC94B" },
        { name: "Error", value: "#F56565" },
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
  title: "Neumorphism/Foundation/Colors",
  component: ColorsShowcase,
  decorators: [neumorphismDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ColorsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
