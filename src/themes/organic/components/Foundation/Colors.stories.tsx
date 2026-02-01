import type { Meta, StoryObj } from "@storybook/react";
import { organicDecorator } from "../../storyDecorator";

const ColorSwatch = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => (
  <div className="flex items-center gap-4">
    <div
      className="h-12 w-12 rounded-full"
      style={{
        backgroundColor: value,
        boxShadow: "0 4px 20px -2px rgba(93, 112, 82, 0.15)",
      }}
    />
    <div>
      <p className="text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-body)]">
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
        { name: "Rice Paper (Canvas)", value: "#FDFCF8" },
        { name: "Card (White)", value: "#FEFEFA" },
        { name: "Stone (Recessed)", value: "#F0EBE5" },
        { name: "Sand (Deep)", value: "#E6DCCD" },
      ],
    },
    {
      title: "Text",
      colors: [
        { name: "Loam (Primary)", value: "#2C2C24" },
        { name: "Bark (Secondary)", value: "#4A4A40" },
        { name: "Dried Grass (Muted)", value: "#78786C" },
        { name: "Inverse", value: "#FDFCF8" },
      ],
    },
    {
      title: "Accent",
      colors: [
        { name: "Moss", value: "#5D7052" },
        { name: "Moss Hover", value: "#4E6145" },
        { name: "Moss Muted", value: "rgba(93, 112, 82, 0.15)" },
      ],
    },
    {
      title: "Secondary",
      colors: [
        { name: "Terracotta", value: "#C18C5D" },
        { name: "Terracotta Hover", value: "#A8794E" },
      ],
    },
    {
      title: "Semantic",
      colors: [
        { name: "Success (Moss)", value: "#5D7052" },
        { name: "Warning (Clay)", value: "#C18C5D" },
        { name: "Error (Brick)", value: "#A85448" },
      ],
    },
    {
      title: "Border",
      colors: [
        { name: "Timber", value: "#DED8CF" },
        { name: "Timber Hover", value: "#5D7052" },
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
  title: "Organic/Foundation/Colors",
  component: ColorsShowcase,
  decorators: [organicDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ColorsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
