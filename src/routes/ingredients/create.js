const Ingredient = require("../../modules/db/schemas/ingredient");

const createIngredient = (req, res) => {
  const ingredient = req.body;
  const newIngredient = new Ingredient(ingredient);

  const sendResponse = (ingredient) => {
    res.writeHead(201, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "success",
        ingredient: ingredient,
      })
    );
  };
  const sendError = (error) => {
    const message = { status: "ingredient was not saved" };
    if (!!error.keyValue.name) message.error = "dublicate name";
    res.writeHead(406, { "Content-type": "application/json" });
    res.end(JSON.stringify(message));
  };
  newIngredient.save().then(sendResponse).catch(sendError);
};
module.exports = createIngredient;
