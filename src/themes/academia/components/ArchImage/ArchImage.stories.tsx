import type { Meta, StoryObj } from "@storybook/react";
import { ArchImage } from "./ArchImage";
import { academiaDecorator } from "../../storyDecorator";

const meta = {
  title: "Academia/Components/ArchImage",
  component: ArchImage,
  decorators: [academiaDecorator],
  argTypes: {
    aspectRatio: {
      control: "select",
      options: ["3/4", "4/3", "1/1", "16/9"],
    },
    disableSepia: { control: "boolean" },
  },
} satisfies Meta<typeof ArchImage>;

export default meta;
type Story = StoryObj<typeof meta>;

const placeholderSrc =
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=500&fit=crop";

export const Default: Story = {
  args: {
    src: placeholderSrc,
    alt: "An old library with towering bookshelves",
    aspectRatio: "3/4",
  },
};

export const Square: Story = {
  args: {
    src: placeholderSrc,
    alt: "An old library with towering bookshelves",
    aspectRatio: "1/1",
  },
};

export const NoSepia: Story = {
  args: {
    src: placeholderSrc,
    alt: "An old library with towering bookshelves",
    disableSepia: true,
  },
};

export const AllAspectRatios: Story = {
  args: { src: placeholderSrc, alt: "Library" },
  render: () => (
    <div className="flex gap-6 items-end">
      <div className="w-40">
        <ArchImage
          src={placeholderSrc}
          alt="Portrait"
          aspectRatio="3/4"
        />
        <p className="text-xs text-[var(--color-text-muted)] mt-2 text-center">
          3:4
        </p>
      </div>
      <div className="w-40">
        <ArchImage
          src={placeholderSrc}
          alt="Square"
          aspectRatio="1/1"
        />
        <p className="text-xs text-[var(--color-text-muted)] mt-2 text-center">
          1:1
        </p>
      </div>
      <div className="w-48">
        <ArchImage
          src={placeholderSrc}
          alt="Landscape"
          aspectRatio="4/3"
        />
        <p className="text-xs text-[var(--color-text-muted)] mt-2 text-center">
          4:3
        </p>
      </div>
    </div>
  ),
};
