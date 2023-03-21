import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GifExpertApp />);
    // screen.debug();
    expect(container).toMatchSnapshot();
  });

  //   test("Debe de agregar una nueva categoria", () => {
  //     const setCategories = jest.fn();
  //     render(<GifExpertApp />);
  //     const inputText = screen.getByRole("textbox");
  //     const form = screen.getByRole("form");

  //     fireEvent.change(inputText, { target: { value: "Dragon Ball" } });
  //     fireEvent.submit(form);

  //     expect(setCategories).toHaveBeenCalledWith(["Dragon Ball", "One Punch"]);
  //   });
});
