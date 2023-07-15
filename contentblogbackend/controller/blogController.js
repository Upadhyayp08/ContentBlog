// const Item = require("../model/blogModel");
const Item = require("../model/blogModel");

// controller for create Item
exports.createItem = async (req, res) => {
  const { _id, Name, Description, Image, Paragraph } = req.body;
  try {
    const item = new Item({ Name, Description, Image, Paragraph });
    const savedItem = await item.save();
    res.status(200).json(savedItem);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving item");
  }
};

// controller for get all Item
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching items");
  }
};

// controller for get single Item
exports.getItemById = async (req, res) => {
  const itemId = req.params.id;

  try {
    const item = await Item.findById(itemId);
    if (!item) {
      res.status(404).send("Item not found");
    } else {
      res.status(200).json(item);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching item");
  }
};

// controller for update Item by its ID
exports.updateItemById = async (req, res) => {
  const itemId = req.params.id;
  const { Name, Description, Image, Paragraph } = req.body;

  try {
    const updatedItem = await Item.findByIdAndUpdate(
      itemId,
      { Name, Description, Image, Paragraph },
      { new: true }
    );
    if (!updatedItem) {
      res.status(404).send("Item not found");
    } else {
      res.status(200).json(updatedItem);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating item");
  }
};

// controller for deleting Item by its ID
exports.deleteItemById = async (req, res) => {
  const itemId = req.params.id;

  try {
    const deletedItem = await Item.findByIdAndRemove(itemId);

    if (!deletedItem) {
      res.status(404).send("Item not found");
    } else {
      res.status(200).json(deletedItem);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting item");
  }
};
