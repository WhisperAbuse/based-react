import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import { useTheme } from "./contexts/ThemeContext";

import CiderPageAsync from "./pages/CiderPage/index.async";
import MainPageAsync from "./pages/MainPage/index.async";

import "./styles/index.scss";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <div>
        <Counter />
      </div>
      <button onClick={toggleTheme}>Toggle theme</button>
      <nav>
        <Link to="/">React app</Link>
        <Link to="/cider">Apple cider</Link>
      </nav>
      <Suspense>
        <Routes>
          <Route path="/" Component={MainPageAsync} />
          <Route path="/cider" Component={CiderPageAsync} />
        </Routes>
      </Suspense>
    </div>
  );
}
