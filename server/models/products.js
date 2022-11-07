var db = require('../../Database/index.js');

const getProducts = function (count, offset) {
  return db.pool.query(`SELECT * from PRODUCTS OFFSET ${offset} LIMIT ${count}`)
    .then((data) => {
      return data.rows;
    });
};

const getProductInfo = function (id) {
  // let queryOne;
  // let queryTwo;
  return db.pool.query(`select * from products where id = ${id}`)
    .then((data) => {
      let queryOne = data.rows;
      return db.pool.query(`select * from features where product_id = ${id}`)
        .then((newData) => {
          queryOne[0].features = newData.rows;
          return queryOne;
        });
    });
};

const getStyle = function (id) {
  db.pool.query(`select * from styles where product_id = ${id}`)
    .then((data) => {
      console.log(data.rows);
    });
};

const getRelated = function (id) {
  db.pool.query(`select * from related where product_id = ${id}`)
    .then((data) => {
      console.log(data.rows);
    });
};

module.exports = {
  getProducts,
  getProductInfo,
  getStyle,
  getRelated
};
