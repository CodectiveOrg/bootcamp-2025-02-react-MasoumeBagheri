import { Header } from "./components/header";
import { Dreams } from "./components/dreams";
import { Footer } from "./components/footer";
import { Toolbar } from "./components/toolbar";

function App() {
  return (
    <div>
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
