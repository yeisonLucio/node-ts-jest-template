import request from "supertest";
import app from "../../../app";

describe("Pruebas de rutas", () => {
  it('Debería responder con "¡Hola, mundo!"', async () => {
    const response = await request(app).post("/product")
    expect(response.text).toBe("¡Hola, mundo!");
  });
});
