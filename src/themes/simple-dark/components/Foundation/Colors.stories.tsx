import type { Meta, StoryObj } from "@storybook/react";
import { simpleDarkDecorator } from "../../storyDecorator";

const ColorSwatch = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => (
  <div className="flex items-center gap-4">
    <div
      className="h-12 w-12 rounded-[var(--radius-md)] border border-[var(--color-border)]"
      style={{ backgroundColor: value }}
    />
    <div>
      <p className="text-sm font-medium text-[var(--color-text-primary)] font-[var(--font-sans)]">
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
        { name: "Surface 0 (Deepest)", value: "#0a0a0f" },
        { name: "Surface 1", value: "#12121a" },
        { name: "Surface 2", value: "#1a1a24" },
        { name: "Surface 3", value: "#252530" },
      ],
    },
    {
      title: "Text",
      colors: [
        { name: "Primary", value: "#fafafa" },
        { name: "Secondary", value: "#a1a1aa" },
        { name: "Muted", value: "#71717a" },
        { name: "Inverse", value: "#0a0a0f" },
      ],
    },
    {
      title: "Accent (Amber)",
      colors: [
        { name: "Default", value: "#f59e0b" },
        { name: "Hover", value: "#fbbf24" },
        { name: "Muted", value: "rgba(245, 158, 11, 0.15)" },
      ],
    },
    {
      title: "Semantic",
      colors: [
        { name: "Success", value: "#22c55e" },
        { name: "Warning", value: "#eab308" },
        { name: "Error", value: "#ef4444" },
      ],
    },
    {
      title: "Border",
      colors: [
        { name: "Default", value: "rgba(255, 255, 255, 0.08)" },
        { name: "Hover", value: "rgba(255, 255, 255, 0.15)" },
        { name: "Accent", value: "rgba(245, 158, 11, 0.5)" },
      ],
    },
  ];

  return (
    <div className="space-y-8 max-w-lg">
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 tracking-tight font-[var(--font-heading)]">
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
  title: "Simple Dark/Foundation/Colors",
  component: ColorsShowcase,
  decorators: [simpleDarkDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ColorsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
