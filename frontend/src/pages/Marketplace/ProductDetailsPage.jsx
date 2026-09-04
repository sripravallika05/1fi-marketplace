import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getProductById,
  getEmiPlans,
  createOrder
} from "../../services/marketplaceApi";

import Loading from "../../components/common/Loading";
import ErrorMessage from "../../components/common/ErrorMessage";

import "./ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [emiPlans, setEmiPlans] = useState([]);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedEmiPlan, setSelectedEmiPlan] = useState(null);

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        setError("");

        const productData = await getProductById(id);
        const emiData = await getEmiPlans(id);

        setProduct(productData);
        setEmiPlans(emiData);

        // Select first options by default
        setSelectedVariant(productData.variants[0]);
        setSelectedEmiPlan(emiData[0]);
      } catch (err) {
        setError(err.message || "Unable to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleProceed = async () => {
    if (!selectedVariant || !selectedEmiPlan) {
      setError("Please select a variant and EMI plan.");
      return;
    }

    try {
      setSubmitting(true);
      setError("");
      setSuccessMessage("");

      const order = await createOrder({
        productId: product.id,
        variantId: selectedVariant.id,
        emiPlanId: selectedEmiPlan.id
      });

      setSuccessMessage(
        `Plan selected successfully. Order ID: ${order.orderId}`
      );
    } catch (err) {
      setError(err.message || "Unable to proceed");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error && !product) {
    return <ErrorMessage message={error} />;
  }

  if (!product) {
    return <ErrorMessage message="Product not found" />;
  }

  return (
    <main className="product-details-page">
      <button
        type="button"
        className="back-button"
        onClick={() => navigate("/marketplace")}
      >
        ← Back to Marketplace
      </button>

      <div className="product-details-container">

        {/* Product Image */}
        <div className="product-details-image">
          <img
            src={`http://localhost:5000${product.image}`}
            alt={product.name}
          />
        </div>

        {/* Product Information */}
        <div className="product-details-content">

          <h1>{product.name}</h1>

          <p className="product-details-description">
            {product.description}
          </p>

          <p className="product-details-price">
            ₹{selectedVariant?.price.toLocaleString("en-IN")}
          </p>

          {/* Variants */}
          <section className="selection-section">
            <h2>Choose a variant</h2>

            <div className="variant-list">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  type="button"
                  className={`variant-button ${
                    selectedVariant?.id === variant.id
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  <span>{variant.name}</span>

                  <span>
                    ₹{variant.price.toLocaleString("en-IN")}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* EMI Plans */}
          <section className="selection-section">
            <h2>Choose an EMI plan</h2>

            <div className="emi-plan-list">
              {emiPlans.map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                  className={`emi-plan ${
                    selectedEmiPlan?.id === plan.id
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => setSelectedEmiPlan(plan)}
                >
                  <strong>{plan.duration} months</strong>

                  <span>
                    ₹{plan.monthlyAmount.toLocaleString("en-IN")}
                    /month
                  </span>

                  <small>
                    Interest: {plan.interestRate}%
                  </small>
                </button>
              ))}
            </div>
          </section>

          {/* Error */}
          {error && (
            <div className="details-error">
              {error}
            </div>
          )}

          {/* Success */}
          {successMessage && (
            <div className="details-success">
              {successMessage}
            </div>
          )}

          {/* Proceed */}
          <button
            type="button"
            className="proceed-button"
            onClick={handleProceed}
            disabled={submitting}
          >
            {submitting ? "Processing..." : "Proceed with EMI"}
          </button>

        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;