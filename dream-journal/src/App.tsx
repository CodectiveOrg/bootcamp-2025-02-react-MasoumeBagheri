import { Header } from "./components/header";

import { IconLight, IconSearch } from "./components/icons/icons";

import "./App.css";
import { SearchBox } from "./components/search-box";
import { DreamFilter } from "./components/dream-filter";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="toolbar">
          <SearchBox />
          <DreamFilter />
          <button className="theme">
            <IconLight />
          </button>
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
