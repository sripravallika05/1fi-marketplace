const express = require("express");

const {
  getEmiPlansByProduct
} = require("../controllers/emiController");

const router = express.Router();

router.get(
  "/products/:productId",
  getEmiPlansByProduct
);

module.exports = router;