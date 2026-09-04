const products = require("../data/products");

const getProducts = (req, res) => {
  res.json({
    success: true,
    data: products
  });
};

const getProductById = (req, res) => {
  const productId = Number(req.params.id);

  const product = products.find(
    (product) => product.id === productId
  );

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }

  res.json({
    success: true,
    data: product
  });
};

module.exports = {
  getProducts,
  getProductById
};