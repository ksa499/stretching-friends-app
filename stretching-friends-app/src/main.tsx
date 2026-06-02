import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Design-system styles (order matters: tokens → base → components)
import "./design-system/styles/tokens.css";
import "./design-system/styles/base.css";
import "./design-system/styles/components.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
