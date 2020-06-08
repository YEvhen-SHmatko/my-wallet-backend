const { Schema, model } = require("mongoose");
const timestamp = require("../middleware/timestamp");
const commentSchema = new Schema({
  product: { type: Schema.ObjectId, ref: "Product" },
  author: { type: Schema.ObjectId, ref: "User" },
  text: {
    type: String,
    require: true,
  },
  mark: {
    type: Number,
    require: true,
    min: 1,
    max: 5,
  },
});
commentSchema.plugin(timestamp);

module.exports = model("Comment", commentSchema);
