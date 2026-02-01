import type { Meta, StoryObj } from "@storybook/react";
import { OrnateDivider } from "./OrnateDivider";
import { academiaDecorator } from "../../storyDecorator";

const meta = {
  title: "Academia/Components/OrnateDivider",
  component: OrnateDivider,
  decorators: [academiaDecorator],
  argTypes: {
    glyph: { control: "text" },
  },
} satisfies Meta<typeof OrnateDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Fleuron: Story = {
  args: { glyph: "\u2766" },
};

export const Asterism: Story = {
  args: { glyph: "\u2042" },
};

export const Custom: Story = {
  args: { glyph: "\u00A7" },
};

export const AllGlyphs: Story = {
  args: {},
  render: () => (
    <div className="flex flex-col gap-8 w-96">
      <OrnateDivider />
      <OrnateDivider glyph={"\u2766"} />
      <OrnateDivider glyph={"\u2042"} />
      <OrnateDivider glyph={"\u00A7"} />
      <OrnateDivider glyph={"\u2726"} />
    </div>
  ),
};
