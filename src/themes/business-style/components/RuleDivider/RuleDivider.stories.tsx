import type { Meta, StoryObj } from "@storybook/react";
import { RuleDivider } from "./RuleDivider";
import { businessStyleDecorator } from "../../storyDecorator";

const meta = {
  title: "Business Style/Components/RuleDivider",
  component: RuleDivider,
  decorators: [businessStyleDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "gold"],
    },
    spacing: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof RuleDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: "default", spacing: "md" },
  decorators: [
    (Story) => (
      <div className="w-96">
        <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Content above the rule
        </p>
        <Story />
        <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Content below the rule
        </p>
      </div>
    ),
  ],
};

export const Gold: Story = {
  args: { variant: "gold", spacing: "md" },
  decorators: [
    (Story) => (
      <div className="w-96">
        <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Content above the rule
        </p>
        <Story />
        <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Content below the rule
        </p>
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  args: { variant: "default" },
  render: () => (
    <div className="w-96">
      <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)] font-[var(--font-mono)] mb-2">
        Default — Small Spacing
      </p>
      <RuleDivider variant="default" spacing="sm" />
      <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)] font-[var(--font-mono)] mb-2">
        Default — Medium Spacing
      </p>
      <RuleDivider variant="default" spacing="md" />
      <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)] font-[var(--font-mono)] mb-2">
        Gold — Small Spacing
      </p>
      <RuleDivider variant="gold" spacing="sm" />
      <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)] font-[var(--font-mono)] mb-2">
        Gold — Large Spacing
      </p>
      <RuleDivider variant="gold" spacing="lg" />
    </div>
  ),
};
