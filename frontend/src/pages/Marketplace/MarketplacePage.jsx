import useProducts from "../../hooks/useProducts";

import ProductGrid from "../../components/marketplace/ProductGrid";
import Loading from "../../components/common/Loading";
import ErrorMessage from "../../components/common/ErrorMessage";

import "./MarketplacePage.css";

const MarketplacePage = () => {
  const { products, loading, error } = useProducts();

  return (
    <main className="marketplace-page">
      {/* Header */}
      <section className="marketplace-header">
        <div className="marketplace-header-content">
          <p className="marketplace-eyebrow">1Fi</p>

          <h1>1Fi Marketplace</h1>

          <p className="marketplace-subtitle">
            Shop your favourite products with flexible EMI plans.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="marketplace-products">
        {loading && <Loading />}

        {error && !loading && (
          <ErrorMessage message={error} />
        )}

        {!loading && !error && (
          <ProductGrid products={products} />
        )}
      </section>
    </main>
  );
};

export default MarketplacePage;