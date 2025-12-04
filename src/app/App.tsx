import { useTheme } from "./providers/ThemeProbiders/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "../widgets/Navbar";
import { Sidebar } from "../widgets/Sidebar";
import { Modal } from "../shared/ui/Modal/Modal";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      {/* <Modal /> */}
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}
