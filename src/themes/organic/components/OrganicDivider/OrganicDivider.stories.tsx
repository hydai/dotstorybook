import type { Meta, StoryObj } from "@storybook/react";
import { OrganicDivider } from "./OrganicDivider";
import { organicDecorator } from "../../storyDecorator";

const meta = {
  title: "Organic/Components/OrganicDivider",
  component: OrganicDivider,
  decorators: [organicDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["wave", "leaf", "vine"],
    },
    color: { control: "color" },
  },
} satisfies Meta<typeof OrganicDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Wave: Story = {
  args: { variant: "wave" },
  render: (args) => (
    <div className="w-96">
      <OrganicDivider {...args} />
    </div>
  ),
};

export const Leaf: Story = {
  args: { variant: "leaf" },
  render: (args) => (
    <div className="w-96">
      <OrganicDivider {...args} />
    </div>
  ),
};

export const Vine: Story = {
  args: { variant: "vine" },
  render: (args) => (
    <div className="w-96">
      <OrganicDivider {...args} />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="w-[500px] space-y-6">
      <div>
        <p className="text-xs font-medium text-[var(--color-text-muted)] mb-2 font-[var(--font-body)]">
          Wave
        </p>
        <OrganicDivider variant="wave" />
      </div>
      <div>
        <p className="text-xs font-medium text-[var(--color-text-muted)] mb-2 font-[var(--font-body)]">
          Leaf
        </p>
        <OrganicDivider variant="leaf" />
      </div>
      <div>
        <p className="text-xs font-medium text-[var(--color-text-muted)] mb-2 font-[var(--font-body)]">
          Vine
        </p>
        <OrganicDivider variant="vine" />
      </div>
      <div>
        <p className="text-xs font-medium text-[var(--color-text-muted)] mb-2 font-[var(--font-body)]">
          Terracotta Wave
        </p>
        <OrganicDivider variant="wave" color="#C18C5D" />
      </div>
    </div>
  ),
};
