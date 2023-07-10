const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  Name: String,
  Description: String,
  Image: String,
  Paragraph: String,
});

const Item = mongoose.model("BlogPosts", itemSchema);

module.exports = Item;
