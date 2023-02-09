import { getImagen } from "../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {
  // test("getImagen debe retornar un URL de la imagen", async () => {
  //   const url = await getImagen();
  //   console.log(url);

  //   expect(typeof url).toBe("string");
  // });

  test("getImagen debe retornar un error si no tenemos API", async () => {
    const resp = await getImagen();
    console.log(resp);

    expect(resp).toBe("No se encontro la imagen");
  });
});
