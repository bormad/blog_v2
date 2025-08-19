import { useState } from "react";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";
import { ThemeSwitcher } from "../../../ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  console.log(styles);

  return (
    <div
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className!,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <ThemeSwitcher className={styles.themeSwitcher} />
    </div>
  );
};
