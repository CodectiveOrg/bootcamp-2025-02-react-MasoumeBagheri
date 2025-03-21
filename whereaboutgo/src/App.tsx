import { Route, Routes } from "react-router";

import { Home } from "./pages/home";
import { About } from "./pages/about";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
    </Routes>
  );
}

export default App;
