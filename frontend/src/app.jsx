import { BrowserRouter, Routes, Route } from "react-router-dom";

import MarketplacePage from "./pages/Marketplace/MarketplacePage";
import ProductDetailsPage from "./pages/Marketplace/ProductDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MarketplacePage />}
        />

        <Route
          path="/marketplace"
          element={<MarketplacePage />}
        />

        <Route
          path="/marketplace/product/:id"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;