import express from 'express';
import * as productController from '../controllers/products.js';
import * as customerController from '../controllers/customers.js';
import * as orderController from '../controllers/orders.js';

const router = express.Router();

router.get('/products', productController.findAll);
router.post('/products', productController.createOne);
router.put('/products/:id', productController.updateOne);
router.delete('/products/:id', productController.deleteOne);
router.get('/products/:id', productController.findOne);

router.get('/customers', customerController.findAll);
router.post('/customers', customerController.createOne);
router.put('/customers/:id', customerController.updateOne);
router.delete('/customers/:id', customerController.deleteOne);
router.get('/customers/:id', customerController.findOne);

router.get('/orders', orderController.findAll);
router.post('/orders', orderController.createOne);
router.put('/orders/:id', orderController.updateOne);
router.delete('/orders/:id', orderController.deleteOne);
router.get('/orders/:id', orderController.findOne);

export default router;
