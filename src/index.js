import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "@pages/Home";
import "./index.css";
import { AccessTokenWrapper } from "./pages/AccessToken";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="callback" element={<AccessTokenWrapper />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
