const products = require("../data/products");
const emiPlans = require("../data/emiPlans");

const createOrder = (req, res) => {
  const {
    productId,
    variantId,
    emiPlanId
  } = req.body;

  if (!productId || !variantId || !emiPlanId) {
    return res.status(400).json({
      success: false,
      message:
        "productId, variantId and emiPlanId are required"
    });
  }

  const product = products.find(
    (item) => item.id === Number(productId)
  );

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }

  const variant = product.variants.find(
    (item) => item.id === Number(variantId)
  );

  if (!variant) {
    return res.status(404).json({
      success: false,
      message: "Product variant not found"
    });
  }

  const emiPlan = emiPlans.find(
    (item) =>
      item.id === Number(emiPlanId) &&
      item.productId === Number(productId)
  );

  if (!emiPlan) {
    return res.status(404).json({
      success: false,
      message: "EMI plan not found"
    });
  }

  const order = {
    orderId: `ORD-${Date.now()}`,
    productId: product.id,
    productName: product.name,
    variantId: variant.id,
    variantName: variant.name,
    productPrice: variant.price,
    emiPlanId: emiPlan.id,
    duration: emiPlan.duration,
    monthlyAmount: emiPlan.monthlyAmount,
    status: "PENDING"
  };

  res.status(201).json({
    success: true,
    message: "EMI plan selected successfully",
    data: order
  });
};

module.exports = {
  createOrder
};