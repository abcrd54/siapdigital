import React from "react";
import ReactDOM from "react-dom/client";
import { defineElement } from "@lordicon/element";
import "@fontsource/space-grotesk/latin-700.css";
import "aos/dist/aos.css";
import "flag-icons/css/flag-icons.min.css";
import App from "./App.jsx";
import { initAnalytics } from "./lib/analytics.js";
import { getPageConfig } from "./data/pageData.js";
import "./index.css";

const page = getPageConfig(window.location.pathname);
defineElement();
initAnalytics();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App page={page} />
  </React.StrictMode>,
);
