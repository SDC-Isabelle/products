require("dotenv").config();
const express = require("express");
const db = require("../Database");
const productRoutes = require("./routes.js");

const app = express();

app.use(express.json());
app.use("/products", productRoutes.router);

app.get('/', (req, res) => {
  res.send("yuou are connected");
});

app.get('/loaderio-37eb4072d24e5879f3cf5de37ba46bdb', (req, res) => {
  res.send('loaderio-37eb4072d24e5879f3cf5de37ba46bdb');
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);