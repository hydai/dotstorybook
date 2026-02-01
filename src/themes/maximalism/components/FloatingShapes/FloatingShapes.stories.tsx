import type { Meta, StoryObj } from "@storybook/react";
import { FloatingShapes } from "./FloatingShapes";
import { Typography } from "../Typography";
import { maximalismDecorator } from "../../storyDecorator";

const meta = {
  title: "Maximalism/Components/FloatingShapes",
  component: FloatingShapes,
  decorators: [maximalismDecorator],
  argTypes: {
    density: {
      control: "select",
      options: ["sparse", "medium", "dense"],
    },
  },
} satisfies Meta<typeof FloatingShapes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "h-96 w-full",
  },
};

export const Sparse: Story = {
  args: {
    density: "sparse",
    className: "h-96 w-full",
  },
};

export const Dense: Story = {
  args: {
    density: "dense",
    className: "h-96 w-full",
  },
};

export const WithContent: Story = {
  args: {
    density: "medium",
    className: "h-96 w-full flex items-center justify-center",
  },
  render: (args) => (
    <FloatingShapes {...args}>
      <div className="text-center p-8">
        <Typography variant="display" gradient>
          Party Time
        </Typography>
        <Typography variant="body-lg" className="mt-4">
          Floating shapes create a fun, energetic background
        </Typography>
      </div>
    </FloatingShapes>
  ),
};
