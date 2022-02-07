import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NavBar from "./components/navbar/NavBar";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<NavBar />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
