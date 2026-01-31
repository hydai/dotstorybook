import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { terminalDecorator } from "../../storyDecorator";

const meta = {
  title: "Terminal/Components/Card",
  component: Card,
  decorators: [terminalDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "ascii"],
    },
    hoverable: { control: "boolean" },
    title: { control: "text" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const cardContent = (
  <div className="space-y-2">
    <p className="text-sm text-[var(--color-text-primary)]">
      System diagnostic complete.
    </p>
    <p className="text-xs text-[var(--color-text-muted)]">
      All subsystems operational. Memory: 64% | CPU: 23%
    </p>
  </div>
);

export const Default: Story = {
  args: { variant: "default", title: "STATUS", children: cardContent },
};

export const Bordered: Story = {
  args: { variant: "bordered", title: "ALERT", children: cardContent },
};

export const Ascii: Story = {
  args: { variant: "ascii", title: "DIAGNOSTICS", children: cardContent },
};

export const Hoverable: Story = {
  args: {
    variant: "default",
    hoverable: true,
    title: "HOVER ME",
    children: cardContent,
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="grid grid-cols-1 gap-4 max-w-md">
      <Card variant="default" title="DEFAULT" hoverable>
        <p className="text-sm text-[var(--color-text-primary)]">
          Standard terminal pane with subtle border.
        </p>
      </Card>
      <Card variant="bordered" title="BORDERED" hoverable>
        <p className="text-sm text-[var(--color-text-primary)]">
          Highlighted pane with accent border.
        </p>
      </Card>
      <Card variant="ascii" title="ASCII ART" hoverable>
        <p className="text-sm text-[var(--color-text-primary)]">
          Box-drawing header with pipe borders.
        </p>
      </Card>
    </div>
  ),
};
