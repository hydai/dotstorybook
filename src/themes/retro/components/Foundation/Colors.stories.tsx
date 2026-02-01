import type { Meta, StoryObj } from "@storybook/react";
import { retroDecorator } from "../../storyDecorator";
import { shadows, borderColors } from "../../tokens";

const ColorSwatch = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => (
  <div className="flex items-center gap-4">
    <div
      className="h-10 w-10"
      style={{
        backgroundColor: value,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: borderColors.outset,
        boxShadow: shadows.outset,
        borderRadius: 0,
      }}
    />
    <div>
      <p className="text-sm font-bold text-black font-[var(--font-body)]">
        {name}
      </p>
      <p className="text-xs text-[#808080] font-[var(--font-mono)]">
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
        { name: "Surface 0 (Silver)", value: "#C0C0C0" },
        { name: "Surface 1 (Button Face)", value: "#D4D0C8" },
        { name: "Surface 2 (Panel Yellow)", value: "#FFFFCC" },
        { name: "Surface 3 (Gray)", value: "#808080" },
      ],
    },
    {
      title: "Text",
      colors: [
        { name: "Primary", value: "#000000" },
        { name: "Secondary", value: "#404040" },
        { name: "Muted", value: "#808080" },
        { name: "Inverse", value: "#FFFFFF" },
      ],
    },
    {
      title: "Accent & Links",
      colors: [
        { name: "Accent (Blue)", value: "#0000FF" },
        { name: "Link Visited", value: "#800080" },
        { name: "Link Active", value: "#FF0000" },
      ],
    },
    {
      title: "Semantic",
      colors: [
        { name: "Success", value: "#008000" },
        { name: "Warning", value: "#FFFF00" },
        { name: "Error", value: "#FF0000" },
      ],
    },
    {
      title: "Bevel",
      colors: [
        { name: "Light (Highlight)", value: "#FFFFFF" },
        { name: "Medium Light", value: "#DFDFDF" },
        { name: "Medium Dark", value: "#808080" },
        { name: "Dark (Shadow)", value: "#404040" },
      ],
    },
    {
      title: "Garish Web Colors",
      colors: [
        { name: "Red", value: "#FF0000" },
        { name: "Green (Lime)", value: "#00FF00" },
        { name: "Blue", value: "#0000FF" },
        { name: "Yellow", value: "#FFFF00" },
        { name: "Magenta", value: "#FF00FF" },
        { name: "Cyan", value: "#00FFFF" },
      ],
    },
  ];

  return (
    <div className="space-y-8 max-w-lg">
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="text-base font-bold text-black mb-4 font-[var(--font-heading)] uppercase">
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
  title: "Retro/Foundation/Colors",
  component: ColorsShowcase,
  decorators: [retroDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ColorsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
