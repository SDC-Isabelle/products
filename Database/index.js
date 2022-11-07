const {Pool, Client } = require("pg");

const pool = new Pool({
  user: process.env.User,
  port: process.env.dbPort,
  database: process.env.Database
});

// pool.query("select * from products where id < 5")
//   .then((data) => {
//     console.log(data.rows);
//   });

module.exports = {
  pool
};

// pool.query("select * from features where id < 20")
//   .then((data) => {
//     console.log(data.rows);
//   });

// pool.query("select * from styles where id < 20")
//   .then((data) => {
//     console.log(data.rows);
//   });

// pool.query("select * from photos where id < 20")
//   .then((data) => {
//     console.log(data.rows);
//   });

// pool.query("select * from skus where id < 20")
//   .then((data) => {
//     console.log(data.rows);
//   });