import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { useTheme } from "./providers/ThemeProvider";

import "@/app/styles/index.scss";
import cx from "@/shared/lib/classNames";
import { CiderPage } from "@/pages/CiderPage";
import { MainPage } from "@/pages/MainPage";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cx("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <nav>
        <Link to="/">React app</Link>
        <Link to="/cider">Apple cider</Link>
      </nav>
      <Suspense>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/cider" Component={CiderPage} />
        </Routes>
      </Suspense>
    </div>
  );
}
