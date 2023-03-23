import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        {Object.values(routeConfig).map((route) => (
          <Route {...route} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
