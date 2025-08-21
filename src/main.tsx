import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./app/styles/index.scss";
import App from "./app/App.tsx";
import { ThemeProvider } from "./app/providers/ThemeProbiders/ui/ThemeProvider.tsx";
import ErrorBoundary from "./app/providers/ErrorBoundary/ui/ErrorBoundary.tsx";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ErrorBoundary>
);
