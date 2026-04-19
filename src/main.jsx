import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/space-grotesk/latin-700.css";
import App from "./App.jsx";
import { getPageConfig } from "./data/pageData.js";
import "./index.css";

const page = getPageConfig(window.location.pathname);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App page={page} />
  </React.StrictMode>,
);
