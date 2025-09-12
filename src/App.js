import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { ContextProvider } from "./components/Context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <Main />
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
