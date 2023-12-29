import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { ThemeContext } from "./context/Theme";
import { useContext } from "react";
import "./style/reset.css";

export function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme === "darck" ? "darck-theme" : "light-theme"}`}>
      <Navbar />
      <Outlet />
    </div>
  );
}
