import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { ContextProvider } from "./components/Context";
import { Route, Routes } from "react-router-dom";
import { AboutUsPage } from "./components/AboutUsPage";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
