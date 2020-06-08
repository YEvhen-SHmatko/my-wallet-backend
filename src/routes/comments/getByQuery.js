const Comment = require("../../modules/db/schemas/comment");

const getByQuery = (req, res) => {
  const productId = req.query.productId.replace(/[',"]/g, "").toString();
  const sendResponse = (comments) => {
    res.writeHead(201, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "success",
        comments,
      })
    );
  };
  const sendError = (error) => {
    const message = { status: "user was not saved" };
    if (!!error.keyValue.name) message.error = "dublicate comment";
    res.writeHead(406, { "Content-type": "application/json" });
    res.end(JSON.stringify(message));
  };
  Comment.find({ product: productId }).then(sendResponse).catch(sendError);
};
module.exports = getByQuery;
