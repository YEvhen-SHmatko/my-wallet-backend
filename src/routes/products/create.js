const Product = require("../../modules/db/schemas/product");
const jwt = require("jsonwebtoken");
const getToken = require("../../modules/getToken");
const createProduct = (req, res) => {
  const token = getToken(req);
  const userId = jwt.decode(token).id;
  const product = { ...req.body, creatorId: userId, ingredients: [] };
  const newProduct = new Product(product);
  const sendResponse = (product) => {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "success",
        product: product,
      })
    );
  };
  const sendError = (error) => {
    const message = { status: "product was not saved" };
    if (!!error.keyValue.name) message.error = "dublicate name";
    res.writeHead(406, { "Content-type": "application/json" });
    res.end(JSON.stringify(message));
  };
  newProduct.save().then(sendResponse).catch(sendError);
};
module.exports = createProduct;
