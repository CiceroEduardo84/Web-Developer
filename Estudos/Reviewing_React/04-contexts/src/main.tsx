import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/Theme.tsx";
import { AppRoutes } from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);
