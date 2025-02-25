import { Header } from "./components/header";
import { Dreams } from "./components/dreams";
import { Footer } from "./components/footer";
import { Toolbar } from "./components/toolbar";

import { ThemeProvider } from "./provider/theme-provider";
import { DreamProvider } from "./provider/dream-provider";
import { ModalProvider } from "./provider/modal-provider";

function App() {
  return (
    <ThemeProvider>
      <DreamProvider>
        <ModalProvider>
          <Header />
          <main>
            <Toolbar />
            <Dreams />
          </main>
          <Footer />
        </ModalProvider>
      </DreamProvider>
    </ThemeProvider>
  );
}

export default App;
