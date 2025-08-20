import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { routeConfig } from "../../../../shared/config/routerConfig/routerConfig";
import { PageLoader } from "../../../../shared/ui/PageLoader/PageLoader";

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
