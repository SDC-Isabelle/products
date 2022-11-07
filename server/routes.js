const express = require('express');
var router = express.Router();
var products = require('./controllers/products.js');

router.get('/', products.listProducts);
router.get('/:product_id', products.productInformation);
router.get('/:product_id/styles', products.styles);
router.get('/:product_id/related', products.related);

module.exports = {
  router
};