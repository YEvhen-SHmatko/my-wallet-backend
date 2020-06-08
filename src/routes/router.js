const express = require("express");
const apiRoutes = express.Router();
const orders = require("./orders/index");
const products = require("./products/index");
const ingredients = require("./ingredients/index");
const users = require("./users/index");
const comments = require("./comments/index");
//products
apiRoutes
  .post("/product", products.create)
  .get("/products", products.getAll)
  .get("/product/:id", products.getById)
  .put("/product/:id", products.edit);

//users
apiRoutes
  // file authRouter .post("/auth/register", users.register)
  // file authRouter .post("/auth/login", users.login)
  .get("/auth/current", users.сurrent) //false
  .get("/auth/logout", users.logout) //false
  .get("/user/:id", users.getById)
  .put("/user/:id", users.edit);

//ingredients
apiRoutes.post("/ingredient", ingredients.create);

//comments
apiRoutes
  .post("/comment", comments.create)
  .get("/comments", comments.getByQuery);

//orders
apiRoutes.post("/orders", orders.create).get("/order/:id", orders.getById);

module.exports = apiRoutes;
