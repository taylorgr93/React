// Importamos las funciones necesarias para realizar las pruebas
import { fireEvent, render, screen } from "@testing-library/react";

// Importamos el componente que vamos a probar
import { AddCategory } from "../../src/components/AddCategory";

// Describimos las pruebas para el componente AddCategory
describe("Pruebas en <AddCategory />", () => {
  // Describimos una prueba específica para verificar que la caja de texto cambie su valor correctamente
  test("Debe de cambiar el valor de la caja de texto", () => {
    // Renderizamos el componente AddCategory con una función de devolución de llamada vacía
    render(<AddCategory onNewCategory={() => {}} />);

    // Buscamos el elemento de entrada de texto y lo almacenamos en una variable
    const inputText = screen.getByRole("textbox");

    // Simulamos un evento de entrada en la caja de texto, ingresando "Saitama"
    fireEvent.input(inputText, { target: { value: "Saitama" } });

    // Verificamos que el valor de la caja de texto sea igual a "Saitama"
    expect(inputText.value).toBe("Saitama");

    // Imprimimos una representación en la consola del DOM renderizado para fines de depuración
    // screen.debug();
  });

  // Describimos una prueba para verificar si la función onNewCategory se llama correctamente cuando se envía un valor
  test("Debe de llamar onNewCategory si el input tiene un valor", () => {
    // Definimos un valor de entrada para la caja de texto y una función simulada de devolución de llamada onNewCategory
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();

    // Renderizamos el componente AddCategory con la función simulada de devolución de llamada onNewCategory
    render(<AddCategory onNewCategory={onNewCategory} />);

    // Buscamos los elementos necesarios para la prueba, como la caja de texto y el formulario
    const inputText = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    // Simulamos la entrada de texto en la caja de texto y el envío del formulario
    fireEvent.input(inputText, { target: { value: inputValue } });
    fireEvent.submit(form);

    // Verificamos que la caja de texto se vacíe después del envío del formulario
    expect(inputText.value).toBe("");

    // Verificamos que la función simulada de devolución de llamada onNewCategory se haya llamado correctamente
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    // Imprimimos una representación en la consola del DOM renderizado para fines de depuración
    // screen.debug();
  });

  // Describimos una prueba para verificar si la función onNewCategory NO se llama cuando el campo de entrada está vacío
  test("No debe de llamar el onNewCategory si el input esta vacio", () => {
    // Definimos una función simulada de devolución de llamada onNewCategory
    const onNewCategory = jest.fn();

    // Renderizamos el componente AddCategory con la función simulada de devolución de llamada onNewCategory
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");

    // Simulamos el envío del formulario sin ingresar ningún valor en la caja de texto
    fireEvent.submit(form);

    // Verificamos que la función simulada de devolución de llamada onNewCategory NO se haya llamado
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
