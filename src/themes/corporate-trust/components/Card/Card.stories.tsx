import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Typography } from "../Typography";
import { Badge } from "../Badge";
import { corporateTrustDecorator } from "../../storyDecorator";

const meta = {
  title: "Corporate Trust/Components/Card",
  component: Card,
  decorators: [corporateTrustDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "glass", "highlighted"],
    },
    hoverable: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="space-y-3">
        <Typography variant="h3">Enterprise Plan</Typography>
        <Typography variant="body-sm" muted>
          Everything you need to scale your business with confidence.
        </Typography>
      </div>
    ),
  },
};

export const Glass: Story = {
  args: {
    variant: "glass",
    children: (
      <div className="space-y-3">
        <Typography variant="h3">Analytics Dashboard</Typography>
        <Typography variant="body-sm" muted>
          Real-time insights into your business performance.
        </Typography>
      </div>
    ),
  },
};

export const Highlighted: Story = {
  args: {
    variant: "highlighted",
    children: (
      <div className="space-y-3">
        <Badge variant="accent">Recommended</Badge>
        <Typography variant="h3">Professional Plan</Typography>
        <Typography variant="body-sm" muted>
          Best for growing teams who need advanced features.
        </Typography>
      </div>
    ),
  },
};

export const Hoverable: Story = {
  args: { hoverable: true, children: "Hoverable" },
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-3xl">
      <Card hoverable>
        <div className="space-y-2">
          <Typography variant="h3">Starter</Typography>
          <Typography variant="body-sm" muted>
            For individuals getting started.
          </Typography>
        </div>
      </Card>
      <Card hoverable variant="highlighted">
        <div className="space-y-2">
          <Badge variant="accent">Popular</Badge>
          <Typography variant="h3">Pro</Typography>
          <Typography variant="body-sm" muted>
            For growing teams.
          </Typography>
        </div>
      </Card>
      <Card hoverable>
        <div className="space-y-2">
          <Typography variant="h3">Enterprise</Typography>
          <Typography variant="body-sm" muted>
            For large organizations.
          </Typography>
        </div>
      </Card>
    </div>
  ),
};
