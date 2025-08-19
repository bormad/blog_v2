import { classNames } from "../../lib/classNames/classNames";
import styles from "./AppLink.module.scss";
import { Link, type LinkProps } from "react-router";

// eslint-disable-next-line react-refresh/only-export-components
export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      className={classNames(styles.appLink, {}, [className!, styles[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
