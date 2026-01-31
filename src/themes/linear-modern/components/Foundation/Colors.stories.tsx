import type { Meta, StoryObj } from "@storybook/react";

const ColorSwatch = ({
  name,
  value,
  textDark = false,
}: {
  name: string;
  value: string;
  textDark?: boolean;
}) => (
  <div className="flex items-center gap-4">
    <div
      className="h-12 w-12 rounded-[var(--radius-md)] border border-[var(--color-border)]"
      style={{ backgroundColor: value }}
    />
    <div>
      <p
        className={`text-sm font-medium ${textDark ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-primary)]"}`}
      >
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
        { name: "Surface 0", value: "#0a0a0b" },
        { name: "Surface 1", value: "#0f0f11" },
        { name: "Surface 2", value: "#18181b" },
        { name: "Surface 3", value: "#27272a" },
      ],
    },
    {
      title: "Text",
      colors: [
        { name: "Primary", value: "#e4e4e7" },
        { name: "Secondary", value: "#a1a1aa" },
        { name: "Muted", value: "#71717a" },
      ],
    },
    {
      title: "Accent & Gradient",
      colors: [
        { name: "Accent", value: "#6366f1" },
        { name: "Accent Hover", value: "#818cf8" },
        { name: "Gradient Start", value: "#6366f1" },
        { name: "Gradient Mid", value: "#a855f7" },
        { name: "Gradient End", value: "#ec4899" },
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
  ];

  return (
    <div className="space-y-8 max-w-lg">
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
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
  title: "Linear Modern/Foundation/Colors",
  component: ColorsShowcase,
  parameters: { layout: "padded" },
} satisfies Meta<typeof ColorsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
