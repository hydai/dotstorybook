import type { Meta, StoryObj } from "@storybook/react";
import { EditorialHero } from "./EditorialHero";
import { boldTypographyDecorator } from "../../storyDecorator";

const meta = {
  title: "Bold Typography/Components/EditorialHero",
  component: EditorialHero,
  decorators: [boldTypographyDecorator],
  argTypes: {
    headline: { control: "text" },
    subline: { control: "text" },
    decorativeNumber: { control: "text" },
  },
} satisfies Meta<typeof EditorialHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: "BOLD TYPE",
    subline:
      "Typography is not decoration. It is the visual structure. Every letterform carries weight, every space carries meaning.",
  },
};

export const Short: Story = {
  args: {
    headline: "READ",
  },
};

export const Long: Story = {
  args: {
    headline: "THE EDITORIAL",
    subline:
      "The art of the editorial spread lives in the tension between massive type and negative space. Every word earns its place on the page.",
    decorativeNumber: "02",
  },
};
