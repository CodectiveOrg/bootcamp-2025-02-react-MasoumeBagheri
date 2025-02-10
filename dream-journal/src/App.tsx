import { useEffect, useState } from "react";

import { Header } from "./components/header";
import { Dreams } from "./components/dreams";
import { Footer } from "./components/footer";
import { Toolbar } from "./components/toolbar";

import { Dream } from "./types/dream.type";

function App() {
  const [dreams, setDreams] = useState<Dream[]>(() => {
    const items = localStorage.getItem("dreams");

    if (items === null) {
      return [];
    }

    return JSON.parse(items);
        
  });

  const addDreamHandler = (dream: Dream): void => {
    setDreams((old) => [...old, dream]);
  };

  useEffect(() => {
    localStorage.setItem("dreams", JSON.stringify(dreams));
  }, [dreams]);

  return (
    <div>
      <Header />
      <main>
        <Toolbar />
        <Dreams dreams={dreams} />
      </main>
      <Footer onAddDream={addDreamHandler} />
    </div>
  );
}

export default App;
