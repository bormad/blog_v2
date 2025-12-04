import { useState } from "react";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";
import { ThemeSwitcher } from "../../../ThemeSwitcher";
import { Button, ThemeButton } from "../../../../shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "../../../../shared/ui/AppLink/AppLink";
import { RoutePath } from "../../../../shared/config/routerConfig/routerConfig";
import MainIcon from "../../../../shared/assets/icons/main-20-20.svg?react";
import AboutIcon from "../../../../shared/assets/icons/about-20-20.svg?react";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className!,
      ])}
    >
      <div className={styles.items}>
        <div className={styles.item}>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.main}
            className={styles.icon}
          >
            <MainIcon />
            {!collapsed && <span>MainPage</span>}
          </AppLink>
        </div>

        <div className={styles.item}>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.about}
            className={styles.icon}
          >
            <AboutIcon />
            {!collapsed && <span>AboutPage</span>}
          </AppLink>
        </div>
      </div>
      <Button
        className={styles.collapsedBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        data-testid="sidebar-toggle"
        onClick={onToggle}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <ThemeSwitcher className={styles.themeSwitcher} />
    </div>
  );
};
