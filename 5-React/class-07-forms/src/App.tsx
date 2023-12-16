import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

// /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook)\.[a-zA-Z]{2,}$/i
// watch,

type Input = {
  name: string;
  email: string;
};

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    if (data.name) {
      setError("name", {
        type: "manual",
        message: "O nome Pedrinho não pode!",
      });
      return;
    }

    reset();
  };

  // console.log(watch("name"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Class 07 forms</h1>

      <section>
        <label>
          Nome:
          <input
            type="text"
            {...register("name", {
              required: "Campo Obrigatório",
              minLength: { value: 3, message: "Mínimo de 3 caractéres" },
              maxLength: { value: 1000, message: "Máximo de 1000 caractéres" },
            })}
          />
        </label>
        <span className="error">{errors.name?.message}</span>
      </section>

      <section>
        <label>
          Email:
          <input
            type="email"
            {...register("email", {
              required: "Campo Obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Email inválido",
              },
            })}
          />
        </label>
        <span className="error">{errors.email?.message}</span>
      </section>

      <button>Cadastrar</button>
    </form>
  );
}
