import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export function Home() {
  const { theme, toggleMode } = useContext(ThemeContext);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={toggleMode}>Theme</button>
      <p>O tema atual e:{theme}</p>
    </div>
  );
}
