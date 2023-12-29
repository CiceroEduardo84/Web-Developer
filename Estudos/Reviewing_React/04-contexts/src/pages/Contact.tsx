import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export function Contact() {
  const { toggleMode } = useContext(ThemeContext);
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={toggleMode}>Theme</button>
    </div>
  );
}
