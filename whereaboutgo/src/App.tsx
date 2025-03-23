import { Route, Routes } from "react-router";

import { Home } from "./pages/home";
import { About } from "./pages/about";

import { RootLayout } from "./root-layout";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
