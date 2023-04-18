// Este es un componente funcional llamado "ShowIncrement", que
// utiliza la función "React.memo" para evitar renderizaciones innecesarias
import React from "react";

// Recibe una prop "increment", que es una función que se ejecutará
//  al hacer clic en el botón.
export const ShowIncrement = React.memo(({ increment }) => {
  // se utiliza para verificar si el componente se está volviendo
  // a renderizar cada vez que se actualiza algún estado o prop
  console.log(`Me volvi a incrementar`);
  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      Incrementar
    </button>
  );
});
