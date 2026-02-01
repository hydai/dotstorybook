import type { Meta, StoryObj } from "@storybook/react";
import { DeviceMockup } from "./DeviceMockup";
import { industrialDecorator } from "../../storyDecorator";

const meta = {
  title: "Industrial/Components/DeviceMockup",
  component: DeviceMockup,
  decorators: [industrialDecorator],
} satisfies Meta<typeof DeviceMockup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomText: Story = {
  args: {
    screenText:
      "> DIAGNOSTICS RUNNING...\n> CPU: 78% // MEM: 4.2GB\n> TEMP: 42.3°C\n> STATUS: NOMINAL",
  },
};

export const AlertMode: Story = {
  args: {
    screenText:
      "> !! WARNING !!\n> PRESSURE THRESHOLD\n> EXCEEDED @ VALVE-03\n> INITIATING SHUTDOWN",
  },
};
