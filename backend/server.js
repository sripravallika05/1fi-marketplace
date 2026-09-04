const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const productRoutes = require("./src/routes/productRoutes");
const emiRoutes = require("./src/routes/emiRoutes");
const orderRoutes = require("./src/routes/orderRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve product images
app.use(
  "/images",
  express.static(
    path.join(__dirname, "../frontend/public/images")
  )
);

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "1Fi Marketplace API is running"
  });
});

// API routes
app.use("/api/products", productRoutes);
app.use("/api/emi", emiRoutes);
app.use("/api/orders", orderRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});