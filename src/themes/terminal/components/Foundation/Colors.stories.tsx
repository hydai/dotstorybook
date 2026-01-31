import type { Meta, StoryObj } from "@storybook/react";
import { terminalDecorator } from "../../storyDecorator";

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
      <p className="text-sm font-bold text-[var(--color-text-primary)] uppercase">
        {name}
      </p>
      <p className="text-xs text-[var(--color-text-muted)]">{value}</p>
    </div>
  </div>
);

function ColorsShowcase() {
  const sections = [
    {
      title: "SURFACE",
      colors: [
        { name: "Surface 0", value: "#0a0a0a" },
        { name: "Surface 1", value: "#0d0d0d" },
        { name: "Surface 2", value: "#141414" },
        { name: "Surface 3", value: "#1a1a1a" },
      ],
    },
    {
      title: "TEXT",
      colors: [
        { name: "Primary", value: "#33ff00" },
        { name: "Secondary", value: "#29cc00" },
        { name: "Muted", value: "#1f521f" },
        { name: "Inverse", value: "#0a0a0a" },
      ],
    },
    {
      title: "SEMANTIC",
      colors: [
        { name: "Success", value: "#33ff00" },
        { name: "Warning", value: "#ffb000" },
        { name: "Error", value: "#ff3333" },
      ],
    },
    {
      title: "BORDER",
      colors: [
        { name: "Default", value: "rgba(51, 255, 0, 0.2)" },
        { name: "Hover", value: "rgba(51, 255, 0, 0.4)" },
        { name: "Accent", value: "rgba(51, 255, 0, 0.6)" },
      ],
    },
  ];

  return (
    <div className="space-y-8 max-w-lg">
      {sections.map((section) => (
        <div key={section.title}>
          <h2
            className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest"
            style={{
              textShadow:
                "0 0 10px rgba(51, 255, 0, 0.4), 0 0 20px rgba(51, 255, 0, 0.2)",
            }}
          >
            {`> ${section.title}`}
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
  title: "Terminal/Foundation/Colors",
  component: ColorsShowcase,
  decorators: [terminalDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ColorsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
