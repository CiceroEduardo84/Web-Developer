import { useState } from "react";
import { Title } from "./components/Title";

// Export named
export function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <Title number={1} title="Fundamentos do React" />
      <Title number={2} title="O que eu preciso saber para comecar?" />
      <Title number={3} title="Rockseat" />

      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>{name}</h2>
    </div>
  );
}
