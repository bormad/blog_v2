import { Link, Route, Routes } from "react-router";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>"Loading..."</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>

      <Link to={"/"}>MainPagee</Link>
      <Link to={"/about"}>AboutPage</Link>
    </div>
  );
}
