import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import "./normalize.css";
import CiderPageAsync from "./pages/CiderPage/index.async";
import MainPageAsync from "./pages/MainPage/index.async";

export default function App() {
  return (
    <div>
      <Counter />
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
