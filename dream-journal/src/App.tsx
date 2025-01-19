import { Header } from "./components/header";
import { SearchBox } from "./components/search-box";
import { DreamFilter } from "./components/dream-filter";
import { Button } from "./components/button";

import { IconLight } from "./components/icons/icons";

import "./App.css";
import { Dreams } from "./components/dreams";
import { Footer } from "./components/footer";

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
      <Footer />
    </div>
  );
}

export default App;
