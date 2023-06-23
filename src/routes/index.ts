import express from "express";
import productRoutes from './product_routes'

const app = express();

app.use("/product", productRoutes);

export default app;