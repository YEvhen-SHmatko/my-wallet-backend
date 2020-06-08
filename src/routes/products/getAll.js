const Product = require("../../modules/db/schemas/product");

const getAll = (req, res) => {
  const sendResponse = (products) => {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "success",
        products,
      })
    );
  };
  const sendError = (error) => {
    const message = { status: "user was not saved" };
    if (!!error.keyValue.email) message.error = "dublicate email";
    res.writeHead(406, { "Content-type": "application/json" });
    res.end(JSON.stringify(message));
  };
  Product.find()
    .populate("ingredients")
    .exec()
    .then(sendResponse)
    .catch(sendError);
};
module.exports = getAll;
