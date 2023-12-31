const mongoose = require("mongoose");
require("dotenv").config();

// Database connection
const dbConnection = mongoose.connect(process.env.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = dbConnection;
