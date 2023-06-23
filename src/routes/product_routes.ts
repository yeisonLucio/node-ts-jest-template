import { Router } from 'express';
import { ProductController } from '../modules/products/infrastructure/product_controller';

const router = Router();
const {createProduct} = new ProductController();

router.post("/", createProduct);

export default router;