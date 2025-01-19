import { Header } from "./components/header";
import { SearchBox } from "./components/search-box";
import { DreamFilter } from "./components/dream-filter";
import { Button } from "./components/button";

import { IconLight } from "./components/icons/icons";

import "./App.css";
import { Dreams } from "./components/dreams";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="toolbar">
          <SearchBox />
          <DreamFilter />
          <Button className="theme">
            <IconLight />
          </Button>
        </div>
        <Dreams />
      </main>
      <footer>
        <button className="add">+</button>
      </footer>
    </div>
  );
}

export default App;
