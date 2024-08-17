import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@/components/atoms/Button";

const meta = {
  /**
   * title : 경로
   * component : 스토리북에 적용한 컴포넌트
   * layout: 컴포넌트 표기 위치
   * argTypes : 정의된 Props 정보가 들어가는 곳
   */
  title: "Basic/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    primary: {
      control: "boolean",
      description: "버튼의 타입",
    },
    backgroundColor: {
      control: "color",
      description: "버튼의 배경 컬러",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
