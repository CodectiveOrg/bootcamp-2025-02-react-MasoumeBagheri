import { Header } from "./components/header";
import { Dreams } from "./components/dreams";
import { Footer } from "./components/footer";
import { Toolbar } from "./components/toolbar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Toolbar />
        <Dreams />
      </main>
      <Footer />
    </div>
  );
}

export default App;
