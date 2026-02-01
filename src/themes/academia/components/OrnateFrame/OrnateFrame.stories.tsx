import type { Meta, StoryObj } from "@storybook/react";
import { OrnateFrame } from "./OrnateFrame";
import { academiaDecorator } from "../../storyDecorator";

const meta = {
  title: "Academia/Components/OrnateFrame",
  component: OrnateFrame,
  decorators: [academiaDecorator],
  argTypes: {
    cornerSize: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    hoverable: { control: "boolean" },
  },
} satisfies Meta<typeof OrnateFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <p className="text-sm text-[var(--color-text-primary)]">
        Framed with brass corner brackets, reminiscent of antique book bindings
        and library card catalogs.
      </p>
    ),
  },
};

export const SmallCorners: Story = {
  args: {
    cornerSize: "sm",
    children: (
      <p className="text-sm text-[var(--color-text-primary)]">
        Smaller, more delicate corner flourishes.
      </p>
    ),
  },
};

export const LargeCorners: Story = {
  args: {
    cornerSize: "lg",
    children: (
      <p className="text-sm text-[var(--color-text-primary)]">
        Larger, more prominent corner brackets for dramatic framing.
      </p>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <p className="text-sm text-[var(--color-text-primary)]">
        Hover to lift this framed element off the page.
      </p>
    ),
  },
};

export const AllSizes: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-6 max-w-md">
      <OrnateFrame cornerSize="sm">
        <p className="text-sm text-[var(--color-text-primary)]">
          Small corners
        </p>
      </OrnateFrame>
      <OrnateFrame cornerSize="md">
        <p className="text-sm text-[var(--color-text-primary)]">
          Medium corners
        </p>
      </OrnateFrame>
      <OrnateFrame cornerSize="lg">
        <p className="text-sm text-[var(--color-text-primary)]">
          Large corners
        </p>
      </OrnateFrame>
    </div>
  ),
};
