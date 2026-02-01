import type { Meta, StoryObj } from "@storybook/react";
import { OrganicBlob } from "./OrganicBlob";
import { organicDecorator } from "../../storyDecorator";

const meta = {
  title: "Organic/Components/OrganicBlob",
  component: OrganicBlob,
  decorators: [organicDecorator],
  argTypes: {
    color: {
      control: "select",
      options: ["moss", "clay", "sand", "muted"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    blur: { control: "boolean" },
    animated: { control: "boolean" },
  },
} satisfies Meta<typeof OrganicBlob>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { color: "moss", size: "md" },
  render: (args) => (
    <div className="relative w-64 h-64">
      <OrganicBlob {...args} />
    </div>
  ),
};

export const Blurred: Story = {
  args: { color: "clay", size: "lg", blur: true },
  render: (args) => (
    <div className="relative w-96 h-96">
      <OrganicBlob {...args} />
    </div>
  ),
};

export const Animated: Story = {
  args: { color: "moss", size: "md", animated: true },
  render: (args) => (
    <div className="relative w-64 h-64">
      <OrganicBlob {...args} />
    </div>
  ),
};

export const Composition: Story = {
  render: () => (
    <div className="relative w-[500px] h-[400px]">
      <OrganicBlob
        color="moss"
        size="lg"
        blur
        className="top-0 left-0"
      />
      <OrganicBlob
        color="clay"
        size="md"
        blur
        animated
        className="top-20 right-0"
      />
      <OrganicBlob
        color="sand"
        size="sm"
        blur
        className="bottom-0 left-20"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-lg font-semibold text-[var(--color-text-primary)] font-[var(--font-heading)]">
          Ambient Blobs
        </p>
      </div>
    </div>
  ),
};
