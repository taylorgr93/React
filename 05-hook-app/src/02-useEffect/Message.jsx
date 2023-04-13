import React, { useEffect, useState } from "react";

export const Message = () => {
  // Define estado para las coordenadas del mouse
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Función que se ejecuta al montar el componente
    const onMouseMove = ({ x, y }) => {
      // Actualiza las coordenadas en el estado
      setCoords({ x, y });
    };

    // Agrega un event listener para el movimiento del mouse
    window.addEventListener("mousemove", onMouseMove);

    // Función que se ejecuta al desmontar el componente
    return () => {
      // Remueve el event listener al desmontar el componente
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []); // Se ejecuta solo al montar el componente

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};
