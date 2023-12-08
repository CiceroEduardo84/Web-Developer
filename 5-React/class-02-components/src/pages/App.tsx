import { CardProfile } from "../components/CardProfile";

export function App() {
  const dataAPI = [
    { id: 1, name: "Emanuel", birth: "12-25-1992" },
    { id: 2, name: "Eduardo", birth: "12-25-1982" },
    { id: 3, name: "Erick", birth: "12-25-1972" },
    { id: 4, name: "Dudu", birth: "12-25-2000" },
  ];

  function calcAge(birth: string) {
    const dateNow = new Date().getTime();
    const dateBirth = new Date(birth).getTime();
    const userage = dateNow - dateBirth;
    return Math.floor(userage / (1000 * 60 * 60 * 24 * 365.25));
  }

  return (
    <>
      <h1> Class 02 components</h1>
      {dataAPI.map(({ id, name, birth }) => {
        return (
          <CardProfile key={id} name={name} birth={birth} calcAge={calcAge} />
        );
      })}
    </>
  );
}
