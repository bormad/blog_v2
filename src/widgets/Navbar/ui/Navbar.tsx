import styles from "./Navbar.module.scss";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "../../../shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
    <div className={classNames(styles.navbar, {}, [className!])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
          MainPage
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          AboutPage
        </AppLink>
      </div>
    </div>
  );
};
