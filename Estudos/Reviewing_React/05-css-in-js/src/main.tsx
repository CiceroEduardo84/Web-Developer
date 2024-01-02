import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App.tsx";
import { GlobalStyle } from "./styles/reset.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
