const Product = require("../../modules/db/schemas/product");
const jwt = require("jsonwebtoken");
const getToken = require("../../modules/getToken");
const editProduct = (req, res) => {
  const token = getToken(req);
  const userId = jwt.decode(token).id;
  const body = req.body;
  const id = req.params.id;
  const editProduct = { ...body, creatorId: userId };

  const sendError = () => {
    res.writeHead(400, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "error",
        text: "there is no such product",
      })
    );
  };

  const sendResponse = (newProduct) => {
    res.writeHead(200, { "Content-type": "application/json" });
    if (!newProduct) {
      return sendError();
    }
    res.end(
      JSON.stringify({
        status: "success",
        product: newProduct,
      })
    );
  };
  Product.findByIdAndUpdate({ _id: id }, { ...editProduct }, { new: true })
    .populate("ingredients")
    .exec()
    .then(sendResponse)
    .catch(sendError);
};
module.exports = editProduct;
