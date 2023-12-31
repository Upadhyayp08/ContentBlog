const express = require("express");
const dbConnection = require("./config/database");
const app = express();
const PORT = 8080;
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");

// middleware-
app.use(cors());
app.use(express.json());

// routes-
app.use("/api/v1/blogs", blogRoutes);
// app.use("/api/v1/accessory", accessoriesRoutes);
// app.use("/api/v1/auth", authRoutes);

// server-
app.listen(PORT, async () => {
  try {
    await dbConnection;
    console.log("Database connected successfully");
    console.log(`PORT is running on ${PORT}`);
  } catch (error) {
    console.log(`error: ${error}`);
    console.log("Database not connected");
  }
});
