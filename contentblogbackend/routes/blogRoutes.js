const express = require("express");
// const itemController = require("../controllers/blogController");
const itemController = require("../controller/blogController");

const router = express.Router();

router.post("/insert", itemController.createItem);
router.get("/", itemController.getAllItems);
router.get("/:id", itemController.getItemById);
router.put("/:id", itemController.updateItemById);
router.delete("/:id", itemController.deleteItemById);

module.exports = router;
