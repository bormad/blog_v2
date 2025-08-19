import { useTheme } from "./providers/ThemeProbiders/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "../widgets/Navbar";

export default function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
}
