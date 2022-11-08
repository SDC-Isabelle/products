var db = require('../../Database/index.js');

const getProducts = function (count, offset) {
  return db.pool.query(`SELECT * from PRODUCTS OFFSET ${offset} LIMIT ${count}`)
    .then((data) => {
      return data.rows;
    });
};

const getProductInfo = function (id) {

  return db.pool.query(`SELECT * FROM (
    SELECT *, (SELECT json_agg(f) FROM
      (SELECT feature, value FROM features WHERE product_id = products.id) f ) as features
      FROM products WHERE id = ${id}) p`)
    .then((data) => {
      return { data: data.rows[0] };
    })
    .catch((err) => {
      console.log(err);
    });
  // return db.pool.query(
  //   // `SELECT * FROM products left join features on features.product_id = products.id
  //   // where products.id = ${id} group by products.id, features.id`
  //   `SELECT * FROM PRODUCTS WHERE products.id = ${id}`
  // )
  //   .then((data) => {
  //     return data.rows;
  //   });


  // return db.pool.query(`select * from products where id = ${id}`)
  //   .then((data) => {
  //     let queryOne = data.rows;
  //     return db.pool.query(`select * from features where product_id = ${id}`)
  //       .then((newData) => {
  //         queryOne[0].features = newData.rows;
  //         return queryOne;
  //       });
  //   });
};

const getStyle = function (id) {

  return db.pool.query(`SELECT json_build_object
  (
      'product_id', ${id},
      'results',
    (SELECT json_agg
      (json_build_object
        (
        'style_id', id,
        'name', name,
        'original_price', original_price,
        'sale_price', sale_price,
        'default?', "default_style",
        'photos',(SELECT json_agg(json_build_object(
              'thumbnail_url', thumbnail_url,
              'url', url)
        ) FROM photos where photos.style_id = styles.id),
        'skus',(SELECT json_object_agg(
              id, (
                SELECT json_build_object(
                'quantity', quantity,
                'size', size)
                )
        ) FROM skus WHERE skus.style_id = styles.id
             )
        )
      ) FROM styles WHERE product_id = ${id}
    )
  )`)
    .then((data) => {
      return data.rows[0].json_build_object;
    })
    .catch((err) => {
      console.log(err);
    });


  // db.pool.query(`select * from styles where product_id = ${id}`)
  //   .then((data) => {
  //     console.log(data.rows);
  //   });
};

const getRelated = function (id) {

  return db.pool.query(`(SELECT array_agg(related_product_id) FROM related WHERE product_id = ${id})`)
    .then((data) => {
      return data.rows[0].array_agg;
    })
    .catch((err) => {
      console.log(err);
    });
  // db.pool.query(`select * from related where product_id = ${id}`)
  //   .then((data) => {
  //     console.log(data.rows);
  //   });
};

module.exports = {
  getProducts,
  getProductInfo,
  getStyle,
  getRelated
};
