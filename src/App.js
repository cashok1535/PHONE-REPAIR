import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { SliderProvider } from "./components/SliderContext";

function App() {
  return (
    <SliderProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </SliderProvider>
  );
}

export default App;
