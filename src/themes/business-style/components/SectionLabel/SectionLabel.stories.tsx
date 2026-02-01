import type { Meta, StoryObj } from "@storybook/react";
import { SectionLabel } from "./SectionLabel";
import { businessStyleDecorator } from "../../storyDecorator";

const meta = {
  title: "Business Style/Components/SectionLabel",
  component: SectionLabel,
  decorators: [businessStyleDecorator],
  argTypes: {
    goldRules: { control: "boolean" },
  },
} satisfies Meta<typeof SectionLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Market Overview" },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const GoldRules: Story = {
  args: { children: "Featured Analysis", goldRules: true },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-8 w-96">
      <SectionLabel>Market Overview</SectionLabel>
      <SectionLabel goldRules>Featured Analysis</SectionLabel>
      <SectionLabel>Editor's Picks</SectionLabel>
      <SectionLabel goldRules>Premium Content</SectionLabel>
    </div>
  ),
};
