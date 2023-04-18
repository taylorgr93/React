// Este código es un ejemplo de cómo utilizar el hook useMemo para optimizar
// el rendimiento en casos donde se realizan tareas pesadas en la interfaz de usuario
import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks";

// La función heavyStuff realiza una tarea pesada de iterar un número determinado de veces
const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i <= iterationNumber; i++) {
    console.log("Ahi vamos...");
  }

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  // se utiliza el hook useCounter personalizado para manejar el estado del contador
  const { counter, increment } = useCounter(4000);
  // se utiliza el hook useState para manejar el estado booleano de la variable show
  const [show, setShow] = useState(true);

  // utiliza el hook useMemo para evitar que se realicen cálculos innecesarios al actualizar el estado del contador
  const memorizadValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4>{memorizadValue}</h4>

      <button
        className="btn btn-primary"
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
