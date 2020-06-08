const Order = require("../../modules/db/schemas/order");

const createOrder = (req, res) => {
  const order = req.body;
  const newOrder = new Order(order);
  const sendResponse = order => {
    res.writeHead(201, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "success",
        order: order
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
  newOrder
    .save()
    .then(sendResponse)
    .catch(sendError);
};
module.exports = createOrder;
