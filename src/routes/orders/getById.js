const Order = require("../../modules/db/schemas/order");

const getOrderById = (req, res) => {
  const id = req.params.id;

  const sendResponse = order => {
    res.writeHead(201, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "success",
        order
      })
    );
  };
  const sendError = () => {
    res.writeHead(406, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "order was not saved"
      })
    );
  };
  Order.findById({ _id: id }, null, { new: true })
    .then(sendResponse)
    .catch(sendError);
};
module.exports = getOrderById;
