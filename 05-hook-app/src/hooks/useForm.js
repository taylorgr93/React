import { useState } from "react";

export const useForm = (inicialForm = {}) => {
  const [formState, setFormState] = useState(inicialForm);

  const onInputChange = ({ target }) => {
    const { name, value, password } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(inicialForm);
  };

  // Retorna el estado actual del formulario junto con una función para manejar cambios
  return {
    ...formState, // Retorna el estado actual del formulario
    formState, // Retorna el estado actual del formulario
    onInputChange, // Retorna la función para manejar cambios
    onResetForm, // Retorna la funcion para resetear valores del formulario
  };
};
