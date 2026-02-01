import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { organicDecorator } from "../../storyDecorator";

const meta = {
  title: "Organic/Components/Input",
  component: Input,
  decorators: [organicDecorator],
  argTypes: {
    disabled: { control: "boolean" },
    label: { control: "text" },
    error: { control: "text" },
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Search for ingredients...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Plant Name",
    placeholder: "Enter plant name",
  },
};

export const WithError: Story = {
  args: {
    label: "Species",
    placeholder: "e.g. Rosa damascena",
    error: "Species not found in catalog",
    defaultValue: "unknown",
  },
};

export const Disabled: Story = {
  args: {
    label: "Season",
    placeholder: "Not available",
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <Input label="Plant Name" placeholder="Enter plant name" />
      <Input label="Species" defaultValue="Rosa damascena" />
      <Input
        label="Catalog Number"
        error="This field is required"
        defaultValue=""
      />
      <Input label="Search" placeholder="Search the garden..." />
      <Input label="Reserved" placeholder="Not available" disabled />
    </div>
  ),
};
