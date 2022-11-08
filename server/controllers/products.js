let productModels = require('../models/products.js');

const listProducts = function (req, res) {
  let { count, page } = req.query;
  count = count === undefined ? 5 : count;
  let offset = ((page - 1) * count) || 0;

  productModels.getProducts(count, offset)
    .then((data) => {
      res.send(data);
    });

};

const productInformation = function (req, res) {
  let productId = req.params.product_id;
  productModels.getProductInfo(productId)
    .then((data) => {
      res.send(data);
    });
};

const styles = function (req, res) {
  let productId = req.params.product_id;
  productModels.getStyle(productId)
    .then((data) => {
      res.send(data);
    });
};

const related = function (req, res) {
  let productId = req.params.product_id;
  productModels.getRelated(productId)
    .then((data) => {
      res.send(data);
    });
};

module.exports = {
  listProducts,
  productInformation,
  styles,
  related
};