import type { Meta, StoryObj } from "@storybook/react";
import Label from "@/components/atoms/Label";
import IconButton from "@/components/atoms/IconButton";
import { fn } from "@storybook/test";
import TextField from "@/components/TextField";

const meta = {
  title: "TextFields/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconPath: {
      control: "text",
      description: "이미지 경로",
    },
    alt: {
      control: "text",
      description: "이미지 alt 속성",
    },
    errorMessage: {
      control: "text",
      description: "에러 메시지",
    },
    placeholder: {
      control: "text",
      description: "placeholder 글자",
    },
    value: {
      control: "text",
      description: "input 글자",
    },
    isError: {
      control: "boolean",
      description: "에러 상태 여부",
    },
    id: {
      control: "text",
      description: "아이디",
    },
  },
  args: {
    onClick: fn(),
    onChange: fn(),
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath: "https://via.placeholder.com/24",
    alt: "icon",
    errorMessage: "필수값입니다.",
    placeholder: "이메일 주소를 입력해주세요.",
    value: "",
    isError: false,
    id: "email",
  },
};
