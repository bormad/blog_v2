import { Link, Route, Routes } from "react-router";
import { MainPageAsync } from "../pages/MainPage/ui/MainPage.async";
import { AboutPageAsync } from "../pages/AboutPage/ui/AboutPage.async";
import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProbiders/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<div>"Loading..."</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>

      <Link to={"/"}>MainPage</Link>
      <Link to={"/about"}>AboutPage</Link>

      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
}
