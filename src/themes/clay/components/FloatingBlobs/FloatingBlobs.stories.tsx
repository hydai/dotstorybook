import type { Meta, StoryObj } from "@storybook/react";
import { FloatingBlobs } from "./FloatingBlobs";
import { clayDecorator } from "../../storyDecorator";

const meta = {
  title: "Clay/Components/FloatingBlobs",
  component: FloatingBlobs,
  decorators: [clayDecorator],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof FloatingBlobs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="relative w-full h-[600px] bg-[#F4F1FA] overflow-hidden">
      <FloatingBlobs />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[var(--color-text-primary)] font-[var(--font-heading)]">
            Floating Blobs
          </h1>
          <p className="mt-3 text-lg text-[var(--color-text-secondary)] font-[var(--font-body)]">
            Animated background blobs drifting behind content
          </p>
        </div>
      </div>
    </div>
  ),
};
