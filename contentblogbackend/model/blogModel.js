const mongoose = require("mongoose");

// Creating modal of the database Schema
const itemSchema = new mongoose.Schema({
  Name: String,
  Description: String,
  Image: String,
  Paragraph: String,
});

const Item = mongoose.model("BlogPosts", itemSchema);

module.exports = Item;
