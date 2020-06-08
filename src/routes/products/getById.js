const Product = require("../../modules/db/schemas/product");

const getProductById = (req, res) => {
  const id = req.params.id;

  const sendResponse = (product) => {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "success",
        product,
      })
    );
  };
  const sendError = () => {
    res.writeHead(406, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "order was not saved",
      })
    );
  };
  Product.findById({ _id: id }, null, { new: true })
    .populate("ingredients")
    .exec()
    .then(sendResponse)
    .catch(sendError);
};
module.exports = getProductById;
