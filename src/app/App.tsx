import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { useTheme } from "./providers/ThemeProvider";

import "@/app/styles/index.scss";
import cx from "@/shared/lib/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cx("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Navbar />
      <AppRouter />
    </div>
  );
}
