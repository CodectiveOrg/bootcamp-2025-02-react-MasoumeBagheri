import { useEffect, useState } from "react";

import { Header } from "./components/header";
import { Dreams } from "./components/dreams";
import { Footer } from "./components/footer";
import { Toolbar } from "./components/toolbar";

import { Dream } from "./types/dream.type";
import { Theme } from "./types/theme";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  const [dreams, setDreams] = useState<Dream[]>(() => {
    const items = localStorage.getItem("dreams");

    if (items === null) {
      return [];
    }

    const dreams: Dream[] = JSON.parse(items);

    return dreams.map((dream) => ({ ...dream, date: new Date(dream.date) }));
  });

  const addDreamHandler = (dream: Dream): void => {
    setDreams((old) => [...old, dream]);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("dreams", JSON.stringify(dreams));
  }, [dreams]);

  return (
    <div>
      <Header />
      <main>
        <Toolbar theme={theme} setTheme={setTheme} />
        <Dreams dreams={dreams} />
      </main>
      <Footer onAddDream={addDreamHandler} />
    </div>
  );
}

export default App;
