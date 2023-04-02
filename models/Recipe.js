const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [false],
    trim: true,
    maxlength: [25, "Category cannot be more than 25 characters"],
    minlength: [1, "name field cannot be empty"],
  },
  name: {
    type: String,
    required: [true, "Must provide a name"],
    trim: true,
    maxlength: [25, "Name cannot be more than 25 characters"],
  },
  cookTime: {
    type: String,
    required: false,
  },
  ingredients: {
    type: Array,
    required: [true, "Must provide a list of ingredients"],
  },
  instructions: {
    type: Array,
    required: [true, "Must provide a list of instructions"],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
