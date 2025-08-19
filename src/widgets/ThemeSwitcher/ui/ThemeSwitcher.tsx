import { useTheme } from "../../../app/providers/ThemeProbiders/useTheme";
import { classNames } from "../../../shared/lib/classNames/classNames";
import styles from "./ThemeSwitcher.module.scss";
import LightIcon from "../../../shared/assets/icons/theme-light.svg?react";
import DarkIcon from "../../../shared/assets/icons/theme-dark.svg?react";
import { Theme } from "../../../app/providers/ThemeProbiders/ThemeContext";
import { Button } from "../../../shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(styles.themeSwitcher, {}, [className!])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
