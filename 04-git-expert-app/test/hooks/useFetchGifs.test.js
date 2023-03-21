import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en hook <useFetchGifs/>", () => {
  test("Debe de regresar el estado inicial", () => {
    // Render the hook with the initial category
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    // Get the current state from the hook's result
    const { images, isLoading } = result.current;

    // Expect that the images array is empty and that isLoading is true
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe de retornar un arreglo de imagenes y isLoading en false", async () => {
    // Se renderiza el hook con la categoria inicial
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    // Se utiliza la función waitFor para esperar hasta que la longitud del arreglo de imágenes en result.current sea mayor a cero.
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    // Se desestructura el estado actual del hook
    const { images, isLoading } = result.current;

    // Se verifica que la longitud del arreglo de imágenes es mayor a cero.
    expect(images.length).toBeGreaterThan(0);

    // Se verifica que el estado de carga es false.
    expect(isLoading).toBeFalsy();
  });
});
