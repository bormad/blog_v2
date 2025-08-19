import { Link } from "react-router";

import { useTheme } from "./providers/ThemeProbiders/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <AppRouter />
      <Link to={"/"}>MainPage</Link>
      <Link to={"/about"}>AboutPage</Link>

      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
}
