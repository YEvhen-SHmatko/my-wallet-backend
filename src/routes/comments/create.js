const Comment = require("../../modules/db/schemas/comment");
const jwt = require("jsonwebtoken");
const getToken = require("../../modules/getToken");
const createComment = (req, res) => {
  const token = getToken(req);
  const userId = jwt.decode(token).id;
  const body = req.body;
  const comment = { ...body, author: userId || body.author };
  const newComment = new Comment(comment);
  const sendResponse = (comment) => {
    res.writeHead(201, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "success",
        comment: comment,
      })
    );
  };
  const sendError = (error) => {
    const message = { status: "comment was not saved" };
    if (!!error.keyValue.name) message.error = "dublicate name";
    res.writeHead(406, { "Content-type": "application/json" });
    res.end(JSON.stringify(message));
  };
  newComment.save().then(sendResponse).catch(sendError);
};
module.exports = createComment;
