// Main Module Required..
const express = require('express');

// Created Require Files..
const controller = require('../controller/product');

const router = express.Router();

/**
 * http://localhost:3000/api/product
 */


router.post('/add-product', controller.addProduct);
router.get('/get-all-products', controller.getAllProducts);
router.get('/get-product-by-product-id/:id', controller.getProductByProductId);
router.get('/get-single-product-by-slug/:slug', controller.getSingleProductBySlug);
router.put('/edit-product-by-id', controller.editProductData);
router.delete('/delete-product-by-id/:id', controller.deleteProductByProductId);

// Export All router..
module.exports = router;