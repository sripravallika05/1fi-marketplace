const API_BASE_URL = "http://localhost:5000/api";

export const getProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = await response.json();

  return result.data;
};

export const getProductById = async (productId) => {
  const response = await fetch(
    `${API_BASE_URL}/products/${productId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const result = await response.json();

  return result.data;
};

export const getEmiPlans = async (productId) => {
  const response = await fetch(
    `${API_BASE_URL}/emi/products/${productId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch EMI plans");
  }

  const result = await response.json();

  return result.data;
};

export const createOrder = async (orderData) => {
  const response = await fetch(
    `${API_BASE_URL}/orders`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderData)
    }
  );

  if (!response.ok) {
    const error = await response.json();

    throw new Error(
      error.message || "Failed to create order"
    );
  }

  const result = await response.json();

  return result.data;
};