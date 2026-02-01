import type { Meta, StoryObj } from "@storybook/react";
import { businessStyleDecorator } from "../../storyDecorator";

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
        border: "1px solid var(--color-border)",
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
        { name: "Surface 0 (Ivory)", value: "#FAFAF8" },
        { name: "Surface 1 (White)", value: "#FFFFFF" },
        { name: "Surface 2 (Warm Gray)", value: "#F5F4F0" },
        { name: "Surface 3 (Deeper Gray)", value: "#EDECE8" },
      ],
    },
    {
      title: "Text",
      colors: [
        { name: "Primary (Rich Black)", value: "#1A1A1A" },
        { name: "Secondary", value: "#4A4A4A" },
        { name: "Muted", value: "#8C8C8C" },
        { name: "Inverse", value: "#FAFAF8" },
      ],
    },
    {
      title: "Accent",
      colors: [
        { name: "Burnished Gold", value: "#B8860B" },
        { name: "Gold Hover", value: "#D4A017" },
        { name: "Gold Muted", value: "rgba(184, 134, 11, 0.12)" },
      ],
    },
    {
      title: "Secondary",
      colors: [
        { name: "Dark Navy", value: "#2C3E50" },
        { name: "Navy Hover", value: "#34495E" },
      ],
    },
    {
      title: "Semantic",
      colors: [
        { name: "Success", value: "#2E7D32" },
        { name: "Warning", value: "#B8860B" },
        { name: "Error", value: "#C62828" },
      ],
    },
    {
      title: "Border",
      colors: [
        { name: "Default", value: "#E8E4DF" },
        { name: "Hover (Black)", value: "#1A1A1A" },
        { name: "Accent", value: "rgba(184, 134, 11, 0.5)" },
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
  title: "Business Style/Foundation/Colors",
  component: ColorsShowcase,
  decorators: [businessStyleDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ColorsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
