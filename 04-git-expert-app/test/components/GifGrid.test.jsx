import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

// Definimos la categoría para ser utilizada en la prueba
const category = "One Punch";

// Describimos una prueba para verificar si se muestra el mensaje "Cargando..." y la categoría proporcionada inicialmente
describe("Pruebas en <GifGrid>", () => {
  // Definimos la prueba para verificar si se muestra el mensaje "Cargando..." inicialmente
  test("Debe de mostrar el loading inicialmente", () => {
    // Simulamos una llamada a useFetchGifs para devolver imágenes vacías y isLoading verdadero
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    // Renderizamos el componente GifGrid con la categoría definida
    render(<GifGrid category={category} />);

    // Verificamos si el mensaje "Cargando..." y la categoría proporcionada están presentes en la pantalla
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe de mostrar items cuando se cargan las imagenes desde el useFetchGifs", () => {
    // Se define un array de objetos de gifs para simular una llamada a la API.
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "http://localhost/saitama.jpg",
      },
      {
        id: "123",
        title: "Goku",
        url: "http://localhost/goku.jpg",
      },
    ];

    // Se utiliza mockReturnValue para simular el uso de useFetchGifs y devolver los gifs definidos anteriormente.
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    // Se renderiza el componente GifGrid con la categoría especificada.
    render(<GifGrid category={category} />);

    // Se verifica que se renderizaron los elementos de imagen (img) correspondientes a los gifs definidos anteriormente.
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
