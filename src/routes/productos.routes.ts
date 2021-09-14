import {Router} from 'express';
import * as productoController from './productos.controller';

const router = Router();

router.get('/productos', productoController.obtenerProductos);
router.get('/producto', productoController.obtenerProducto);
router.post('/crearProducto', productoController.crearProducto);
router.delete('/producto/:id', productoController.borrarProducto);
router.put('/producto/:id', productoController.actualizarProducto);




export default router;