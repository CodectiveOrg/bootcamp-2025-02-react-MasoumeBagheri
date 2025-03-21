import { Header } from "./components/header";
import { Dreams } from "./components/dreams";
import { Footer } from "./components/footer";
import { Toolbar } from "./components/toolbar";

import { Toaster } from "./components/toaster";

import { ThemeProvider } from "./provider/theme-provider";
import { DreamProvider } from "./provider/dream-provider";
import { ModalProvider } from "./provider/modal-provider";
import { FiltersProvider } from "./provider/filters-provider";

function App() {
  return (
    <ThemeProvider>
      <DreamProvider>
        <FiltersProvider>
          <ModalProvider>
            <Header />
            <main>
              <Toolbar />
              <Dreams />
            </main>
            <Footer />
            <Toaster />
          </ModalProvider>
        </FiltersProvider>
      </DreamProvider>
    </ThemeProvider>
  );
}

export default App;
