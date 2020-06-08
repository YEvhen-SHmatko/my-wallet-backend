const { Schema, model } = require("mongoose");
const timestamp = require("../middleware/timestamp");
const ingredientSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
    require: true,
  },
});
ingredientSchema.plugin(timestamp);

module.exports = model("Ingredient", ingredientSchema);
