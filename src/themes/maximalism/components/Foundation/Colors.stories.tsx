import type { Meta, StoryObj } from "@storybook/react";
import { maximalismDecorator } from "../../storyDecorator";

const ColorSwatch = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => (
  <div className="flex items-center gap-4">
    <div
      className="h-12 w-12 rounded-xl border-2 border-white/20"
      style={{ backgroundColor: value }}
    />
    <div>
      <p className="text-sm font-bold text-[var(--color-text-primary)] font-[var(--font-heading)]">
        {name}
      </p>
      <p className="text-xs text-[var(--color-text-muted)] font-[var(--font-body)]">
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
        { name: "Surface 0", value: "#0D0D1A" },
        { name: "Surface 1", value: "#1A1030" },
        { name: "Surface 2", value: "#2D1B4E" },
        { name: "Surface 3", value: "#3D2866" },
      ],
    },
    {
      title: "Text",
      colors: [
        { name: "Primary", value: "#FFFFFF" },
        { name: "Secondary", value: "#C8B8E8" },
        { name: "Muted", value: "#7B6A9E" },
        { name: "Inverse", value: "#0D0D1A" },
      ],
    },
    {
      title: "Magenta",
      colors: [
        { name: "Default", value: "#FF3AF2" },
        { name: "Hover", value: "#FF6BF5" },
        { name: "Muted", value: "rgba(255, 58, 242, 0.15)" },
      ],
    },
    {
      title: "Cyan",
      colors: [
        { name: "Default", value: "#00F5D4" },
        { name: "Hover", value: "#33F7DE" },
        { name: "Muted", value: "rgba(0, 245, 212, 0.15)" },
      ],
    },
    {
      title: "Yellow",
      colors: [
        { name: "Default", value: "#FFE600" },
        { name: "Hover", value: "#FFEB33" },
        { name: "Muted", value: "rgba(255, 230, 0, 0.15)" },
      ],
    },
    {
      title: "Orange",
      colors: [
        { name: "Default", value: "#FF6B35" },
        { name: "Hover", value: "#FF8A5C" },
        { name: "Muted", value: "rgba(255, 107, 53, 0.15)" },
      ],
    },
    {
      title: "Purple",
      colors: [
        { name: "Default", value: "#7B2FFF" },
        { name: "Hover", value: "#9B5FFF" },
        { name: "Muted", value: "rgba(123, 47, 255, 0.15)" },
      ],
    },
    {
      title: "Semantic",
      colors: [
        { name: "Success", value: "#00F5D4" },
        { name: "Warning", value: "#FFE600" },
        { name: "Error", value: "#FF3AF2" },
      ],
    },
    {
      title: "Border",
      colors: [
        { name: "Default", value: "rgba(255, 255, 255, 0.12)" },
        { name: "Hover", value: "rgba(255, 58, 242, 0.4)" },
        { name: "Accent", value: "rgba(255, 58, 242, 0.7)" },
      ],
    },
  ];

  return (
    <div className="space-y-8 max-w-lg">
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="text-lg font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
            {section.title}
          </h2>
          <div className="space-y-3">
            {section.colors.map((color) => (
              <ColorSwatch key={color.name} {...color} />
            ))}
          </div>
        </div>
      ))}

      {/* Gradient preview */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Gradient
        </h2>
        <div
          className="h-16 rounded-2xl"
          style={{
            background: "linear-gradient(90deg, #FF3AF2, #7B2FFF, #00F5D4, #FFE600, #FF6B35)",
          }}
        />
        <p className="text-xs text-[var(--color-text-muted)] mt-2 font-[var(--font-body)]">
          Magenta → Purple → Cyan → Yellow → Orange
        </p>
      </div>
    </div>
  );
}

const meta = {
  title: "Maximalism/Foundation/Colors",
  component: ColorsShowcase,
  decorators: [maximalismDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ColorsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
