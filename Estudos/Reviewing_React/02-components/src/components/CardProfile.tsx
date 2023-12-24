import "./style.css";

type cardProps = {
  name: string;
  birth: string;
  calcAge: (birth: string) => number;
};

export function CardProfile({ name, birth, calcAge }: cardProps) {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Idade: {calcAge(birth)}</p>
    </div>
  );
}
