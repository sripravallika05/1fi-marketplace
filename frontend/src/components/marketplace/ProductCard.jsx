import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/marketplace/product/${product.id}`);
  };

  return (
    <article className="product-card">
      <div className="product-card-image-container">
        <img
          src={`http://localhost:5000${product.image}`}
          alt={product.name}
          className="product-card-image"
        />
      </div>

      <div className="product-card-content">
        <h3 className="product-card-name">
          {product.name}
        </h3>

        <p className="product-card-description">
          {product.description}
        </p>

        <div className="product-card-price">
          ₹{product.price.toLocaleString("en-IN")}
        </div>

        <button
          type="button"
          className="product-card-button"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </article>
  );
};

export default ProductCard;