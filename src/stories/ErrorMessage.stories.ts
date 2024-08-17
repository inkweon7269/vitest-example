import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "@/components/atoms/ErrorMessage";

const meta = {
  title: "Text/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "에러 메시지" },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "필수 항목입니다.",
  },
};
