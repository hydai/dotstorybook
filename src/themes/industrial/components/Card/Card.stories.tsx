import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { industrialDecorator } from "../../storyDecorator";

const meta = {
  title: "Industrial/Components/Card",
  component: Card,
  decorators: [industrialDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "panel", "recessed"],
    },
    hoverable: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <p className="text-sm text-[var(--color-text-primary)] font-[var(--font-body)]">
          Standard neumorphic card with raised shadow appearance.
        </p>
      </div>
    ),
  },
};

export const Panel: Story = {
  args: {
    variant: "panel",
    title: "System Panel",
    children: (
      <div>
        <p className="text-sm text-[var(--color-text-primary)] font-[var(--font-body)]">
          Panel variant with corner screws and vent slots for an industrial
          hardware aesthetic.
        </p>
      </div>
    ),
  },
};

export const Recessed: Story = {
  args: {
    variant: "recessed",
    title: "Data Readout",
    children: (
      <div>
        <p className="text-sm text-[var(--color-text-primary)] font-[var(--font-body)]">
          Recessed variant with inset shadow — appears pressed into the surface.
        </p>
      </div>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    title: "Interactive Module",
    children: (
      <div>
        <p className="text-sm text-[var(--color-text-primary)] font-[var(--font-body)]">
          Hover to see mechanical lift animation with shadow upgrade.
        </p>
      </div>
    ),
  },
};

export const AllVariants: Story = {
  args: { children: "Content" },
  render: () => (
    <div className="flex gap-6 flex-wrap items-start max-w-3xl">
      <Card title="Default">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Standard raised card
        </p>
      </Card>
      <Card variant="panel" title="Panel">
        <p className="text-sm text-[var(--color-text-secondary)]">
          With screws & vents
        </p>
      </Card>
      <Card variant="recessed" title="Recessed">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Pressed into surface
        </p>
      </Card>
    </div>
  ),
};
