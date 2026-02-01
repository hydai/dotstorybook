import type { Meta, StoryObj } from "@storybook/react";
import { IsometricCard } from "./IsometricCard";
import { Typography } from "../Typography";
import { Badge } from "../Badge";
import { corporateTrustDecorator } from "../../storyDecorator";

const meta = {
  title: "Corporate Trust/Components/IsometricCard",
  component: IsometricCard,
  decorators: [corporateTrustDecorator],
} satisfies Meta<typeof IsometricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="space-y-3">
        <Badge variant="accent">3D Depth</Badge>
        <Typography variant="h3">Isometric View</Typography>
        <Typography variant="body-sm" muted>
          Cards with CSS perspective transforms create dimensional depth — a
          signature of modern enterprise UI.
        </Typography>
      </div>
    ),
  },
};

export const Grid: Story = {
  args: { children: null },
  render: () => (
    <div className="grid grid-cols-2 gap-8 max-w-xl py-8">
      <IsometricCard>
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-lg font-bold">
            S
          </div>
          <Typography variant="h3">Security</Typography>
          <Typography variant="body-sm" muted>
            SOC 2 Type II certified
          </Typography>
        </div>
      </IsometricCard>
      <IsometricCard>
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-lg font-bold">
            C
          </div>
          <Typography variant="h3">Compliance</Typography>
          <Typography variant="body-sm" muted>
            GDPR & HIPAA ready
          </Typography>
        </div>
      </IsometricCard>
      <IsometricCard>
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-lg font-bold">
            U
          </div>
          <Typography variant="h3">Uptime</Typography>
          <Typography variant="body-sm" muted>
            99.99% SLA guaranteed
          </Typography>
        </div>
      </IsometricCard>
      <IsometricCard>
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white text-lg font-bold">
            A
          </div>
          <Typography variant="h3">Analytics</Typography>
          <Typography variant="body-sm" muted>
            Real-time dashboards
          </Typography>
        </div>
      </IsometricCard>
    </div>
  ),
};
