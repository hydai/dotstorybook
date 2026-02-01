import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { botanicalDecorator } from "../../storyDecorator";

const meta = {
  title: "Botanical/Components/Input",
  component: Input,
  decorators: [botanicalDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["underlined", "pill"],
    },
    disabled: { control: "boolean" },
    label: { control: "text" },
    error: { control: "text" },
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Underlined: Story = {
  args: {
    variant: "underlined",
    placeholder: "Enter plant name",
  },
};

export const Pill: Story = {
  args: {
    variant: "pill",
    placeholder: "Search the garden...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "PLANT NAME",
    placeholder: "Enter plant name",
  },
};

export const WithError: Story = {
  args: {
    label: "SPECIES",
    placeholder: "e.g. Rosa damascena",
    error: "Species not found in catalog",
    defaultValue: "unknown",
  },
};

export const Disabled: Story = {
  args: {
    label: "SEASON",
    placeholder: "Not available",
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <Input variant="underlined" label="PLANT NAME" placeholder="Enter plant name" />
      <Input variant="underlined" label="SPECIES" defaultValue="Rosa damascena" />
      <Input
        variant="underlined"
        label="CATALOG NUMBER"
        error="This field is required"
        defaultValue=""
      />
      <Input variant="pill" label="SEARCH" placeholder="Search the garden..." />
      <Input variant="pill" label="RESERVED" placeholder="Not available" disabled />
    </div>
  ),
};
