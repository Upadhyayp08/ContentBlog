const mongoose = require("mongoose");
require("dotenv").config();

// Database connection
const dbConnection = mongoose.connect(process.env.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log(process.env.mongoUrl);

module.exports = dbConnection;
