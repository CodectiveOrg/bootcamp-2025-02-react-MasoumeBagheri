import { Header } from "./components/header";

import { IconLight, IconSearch } from "./components/icons/icons";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="toolbar">
          <div className="search-box">
            <input type="text" />
            <IconSearch />
            <select>
              <option value="">All</option>
              <option value="">Filter1</option>
              <option value="">Filter2</option>
            </select>
            <button className="theme">
              <IconLight />
            </button>
          </div>
        </div>
        <ul className="items"></ul>
      </main>
      <footer>
        <button className="add">+</button>
      </footer>
    </div>
  );
}

export default App;
