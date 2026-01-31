import type { Meta, StoryObj } from "@storybook/react";
import { kineticDecorator } from "../../storyDecorator";

const ColorSwatch = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => (
  <div className="flex items-center gap-4">
    <div
      className="h-12 w-12 border-2 border-[var(--color-border)]"
      style={{ backgroundColor: value }}
    />
    <div>
      <p className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-tight">
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
        { name: "Surface 0 — Background", value: "#09090B" },
        { name: "Surface 1", value: "#0C0C0E" },
        { name: "Surface 2 — Muted", value: "#18181B" },
        { name: "Surface 3 — Elevated", value: "#27272A" },
      ],
    },
    {
      title: "TEXT",
      colors: [
        { name: "Primary — Off White", value: "#FAFAFA" },
        { name: "Secondary — Zinc 400", value: "#A1A1AA" },
        { name: "Muted — Zinc 500", value: "#71717A" },
        { name: "Inverse — Rich Black", value: "#09090B" },
      ],
    },
    {
      title: "ACCENT",
      colors: [
        { name: "Accent — Acid Yellow", value: "#DFE104" },
        { name: "Accent Hover", value: "#E8EA33" },
        { name: "Accent Muted", value: "rgba(223, 225, 4, 0.15)" },
      ],
    },
    {
      title: "BORDER",
      colors: [
        { name: "Default — Zinc 700", value: "#3F3F46" },
        { name: "Hover — Zinc 600", value: "#52525B" },
        { name: "Accent", value: "#DFE104" },
      ],
    },
  ];

  return (
    <div className="space-y-10 max-w-lg">
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tighter">
            {section.title}
          </h2>
          <div className="space-y-4">
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
  title: "Kinetic/Foundation/Colors",
  component: ColorsShowcase,
  decorators: [kineticDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ColorsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
