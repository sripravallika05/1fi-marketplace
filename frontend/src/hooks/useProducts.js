import { useEffect, useState } from "react";
import { getProducts } from "../services/marketplaceApi";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProducts();

        setProducts(data);
      } catch (err) {
        setError(err.message || "Unable to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error
  };
};

export default useProducts;