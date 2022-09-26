import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>My Top Netflix Series </h1>
    <div className="all-cards">
      <App />
    </div>
  </StrictMode>
);
