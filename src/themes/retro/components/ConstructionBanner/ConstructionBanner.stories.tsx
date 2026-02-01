import type { Meta, StoryObj } from "@storybook/react";
import { ConstructionBanner } from "./ConstructionBanner";
import { retroDecorator } from "../../storyDecorator";

const meta = {
  title: "Retro/Components/ConstructionBanner",
  component: ConstructionBanner,
  decorators: [retroDecorator],
} satisfies Meta<typeof ConstructionBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomText: Story = {
  args: {
    children: "THIS PAGE IS NOT FINISHED YET! COME BACK SOON!",
  },
};

export const ComingSoon: Story = {
  args: {
    children: "COMING SOON!!!",
  },
};
