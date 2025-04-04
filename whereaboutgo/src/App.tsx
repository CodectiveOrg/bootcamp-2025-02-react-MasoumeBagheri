import { Route, Routes } from "react-router";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { NotFound } from "./pages/not-found";

import { RootLayout } from "./root-layout";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
