import { Route, Routes } from "react-router";

import { QueryProvider } from "./providers/query.provider";

import { RootLayout } from "./root-layout";

import { HomePage } from "./pages/home";

import { MoviePage } from "./pages/movie";

import { NotFoundPage } from "./pages/not-found";

import "./App.css";

function App() {
  return (
    <QueryProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movie/:id" element={<MoviePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </QueryProvider>
  );
}

export default App;
