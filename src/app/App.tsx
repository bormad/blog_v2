import { useTheme } from "./providers/ThemeProbiders/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "../widgets/Navbar";
import { Sidebar } from "../widgets/Sidebar";
import { useEffect } from "react";

export default function App() {
  const { theme } = useTheme();

  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error("aboba");
    }
  }, []);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}
