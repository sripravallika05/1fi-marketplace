const emiPlans = require("../data/emiPlans");

const getEmiPlansByProduct = (req, res) => {
  const productId = Number(req.params.productId);

  const plans = emiPlans.filter(
    (plan) => plan.productId === productId
  );

  if (plans.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No EMI plans found for this product"
    });
  }

  res.json({
    success: true,
    data: plans
  });
};

module.exports = {
  getEmiPlansByProduct
};