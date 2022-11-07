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

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);