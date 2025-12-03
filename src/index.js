import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/css/index.css";
import "../src/css/fonts.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/PHONE-REPAIR">
    <App />
  </BrowserRouter>
);

reportWebVitals();
