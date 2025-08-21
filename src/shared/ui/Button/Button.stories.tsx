import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Button, ThemeButton } from "./Button";
import styles from "./Button.module.scss";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    className: styles.button,
    children: "Кнопка",
  },
};

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    className: styles.button,
    children: "Кнопка",
  },
};
