import { Title } from "./style.ts";

export function App() {
  return (
    <div className="App">
      <Title font={120}>
        Hello World!
        <span>Texto Menor</span>
      </Title>
    </div>
  );
}
