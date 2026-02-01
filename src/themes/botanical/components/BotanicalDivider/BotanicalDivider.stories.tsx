import type { Meta, StoryObj } from "@storybook/react";
import { BotanicalDivider } from "./BotanicalDivider";
import { botanicalDecorator } from "../../storyDecorator";

const meta = {
  title: "Botanical/Components/BotanicalDivider",
  component: BotanicalDivider,
  decorators: [botanicalDecorator],
  argTypes: {
    glyph: { control: "text" },
  },
} satisfies Meta<typeof BotanicalDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Leaf: Story = {
  args: { glyph: "\u2E19" },
};

export const Flower: Story = {
  args: { glyph: "\u2740" },
};

export const Custom: Story = {
  args: { glyph: "\u00A7" },
};

export const AllGlyphs: Story = {
  args: {},
  render: () => (
    <div className="flex flex-col gap-8 w-96">
      <BotanicalDivider />
      <BotanicalDivider glyph={"\u2740"} />
      <BotanicalDivider glyph={"\u2E19"} />
      <BotanicalDivider glyph={"\u2736"} />
      <BotanicalDivider glyph={"\u00A7"} />
    </div>
  ),
};
