const { Schema, model } = require("mongoose");
const Ingredient = require("./ingredient");
const timestamp = require("../middleware/timestamp");
const productSchema = new Schema({
  sku: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  currency: {
    type: String,
    require: true,
  },
  creatorId: {
    type: Schema.ObjectId,
    ref: "User",
  },
  created: Date,
  modified: Date,
  likes: Number,
  categories: {
    type: Array,
  },
  comments: [{ type: Schema.ObjectId, ref: "Comment" }],
  ingredients: [{ type: Schema.ObjectId, ref: "Ingredient" }],
});
productSchema.plugin(timestamp);

module.exports = model("Product", productSchema);
