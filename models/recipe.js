const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [false],
    trim: true,
    maxlength: [25, "Category cannot be more than 25 characters"],
  },
  name: {
    type: String,
    required: [true, "Must provide a name"],
    trim: true,
    maxlength: [25, "Name cannot be more than 25 characters"],
  },
  ingredients: {
    type: Array,
    required: [true, "Must provide a list of ingredients"],
  },
});

mongoose.exports = mongoose.model("Recipe", RecipeSchema);
