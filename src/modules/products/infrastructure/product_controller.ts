import { Request, Response } from "express";

export class ProductController {
  public createProduct(req: Request, res: Response): void {
    res.send("¡Hola, mundo!");
  }
}
