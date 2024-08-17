import type { Meta, StoryObj } from "@storybook/react";
import Label from "@/components/atoms/Label";
import IconButton from "@/components/atoms/IconButton";
import { fn } from "@storybook/test";

const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconPath: { control: "text", description: "이미지 경로" },
    alt: { control: "text", description: "이미지 alt 속성" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath: "https://via.placeholder.com/24",
    alt: "icon",
  },
};
