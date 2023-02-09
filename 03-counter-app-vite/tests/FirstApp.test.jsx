import { render } from "@testing-library/react";
import { FirtsApp } from "../src/FirtsApp";

describe("Pruebas en <FirstApp />", () => {
  // test("Debe de hacer match con el snapshot", () => {
  //   const title = "Hola soy Goku";
  //   const { container } = render(<FirtsApp title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test("Debe de mostrar el titulo en un h1", () => {
    const title = "Hola soy Goku";
    const { container, getByText, getByTestId } = render(
      <FirtsApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toBe(title);
    // expect(h1.innerHTML).toContain(title);

    // expect(getByTestId("test-title")).toBeTruthy();
    // expect(getByTestId("test-title").innerHTML).toContain(title);
    expect(getByTestId("test-title").innerHTML).toBe(title);
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    const title = "Hola soy Goku";
    const subTitle = "Soy un subtitulo";
    const { getByText, getAllByText } = render(
      <FirtsApp title={title} subtitle={subTitle} />
    );

    // expect(getByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
