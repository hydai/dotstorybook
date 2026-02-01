import type { Meta, StoryObj } from "@storybook/react";
import { GradientBlobs } from "./GradientBlobs";
import { Typography } from "../Typography";
import { Button } from "../Button";
import { corporateTrustDecorator } from "../../storyDecorator";

const meta = {
  title: "Corporate Trust/Components/GradientBlobs",
  component: GradientBlobs,
  decorators: [corporateTrustDecorator],
} satisfies Meta<typeof GradientBlobs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <GradientBlobs className="min-h-[400px] flex items-center justify-center rounded-2xl bg-slate-50 p-12">
      <div className="text-center space-y-6 max-w-lg">
        <Typography variant="display" gradient>
          Build Trust at Scale
        </Typography>
        <Typography variant="body" muted>
          Enterprise-grade infrastructure with the security and compliance your
          business demands.
        </Typography>
        <div className="flex gap-3 justify-center">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </GradientBlobs>
  ),
};

export const Ambient: Story = {
  args: {},
  render: () => (
    <GradientBlobs className="min-h-[300px] rounded-2xl bg-slate-50" />
  ),
};
