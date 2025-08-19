import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./app/styles/index.scss";
import App from "./app/App.tsx";
import { ThemeProvider } from "./app/providers/ThemeProbiders/ui/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
