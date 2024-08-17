import type { Meta, StoryObj } from "@storybook/react";
import Label from "@/components/atoms/Label";

const meta = {
  title: "Text/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "라벨 이름" },
    htmlFor: { control: "text", description: "라벨의 for 속성" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "이메일",
    htmlFor: "email",
  },
};
