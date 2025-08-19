import type { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../lib/classNames/classNames";
import styles from "./Button.module.scss";

// eslint-disable-next-line react-refresh/only-export-components
export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ThemeButton.CLEAR,
    ...otherProps
  } = props;
  return (
    <button
      className={classNames(styles.button, {}, [className!, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
