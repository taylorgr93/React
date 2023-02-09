import { render, screen } from "@testing-library/react";
import { FirtsApp } from "../src/FirtsApp";

describe("Pruebas en <FirstApp />", () => {
  const title = "Hola, soy Goku";
  const subtitle = "Soy un subtitulo";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<FirtsApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el mensaje Hola, soy Goku", () => {
    render(<FirtsApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug();
  });

  test("Debe de mostrar el titulo en h1", () => {
    render(<FirtsApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    render(<FirtsApp title={title} subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
