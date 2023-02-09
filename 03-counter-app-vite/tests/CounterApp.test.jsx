import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en <CounterApp />", () => {
  const defaultValue = 100;

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={defaultValue} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el valor inicial de 100 <CounterApp value={100} />", () => {
    render(<CounterApp value={defaultValue} />);
    // expect(screen.getAllByText(defaultValue)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      defaultValue.toString()
    );
  });

  test("Debe de incrementar con el boton +1", () => {
    render(<CounterApp value={defaultValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("101")).toBeTruthy();
  });

  test("Debe de decrementar con el boton -1", () => {
    render(<CounterApp value={defaultValue} />);
    fireEvent.click(screen.getByText("-1"));
    // screen.debug();
    expect(screen.getByText("99")).toBeTruthy();
  });

  test("Debe de funcionar el boton de reset", () => {
    render(<CounterApp value={defaultValue} />);
    // fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    // screen.debug();
    expect(screen.getByText("100")).toBeTruthy();
  });
});
