# 1Fi Marketplace

A responsive 1Fi Marketplace feature built as part of the 1Fi SDE Intern Assignment.

The application allows users to browse products, view product details, select product variants, choose an EMI plan, and proceed with the selected plan.

## Features

- 1Fi Marketplace section inside the Shop page
- Product listing
- Product images
- Product name and pricing
- Product details
- Product variants
- EMI options and plans
- EMI plan selection
- Variant selection
- Proceed with selected EMI plan
- Order creation through backend API
- Order ID generation
- Loading states
- Error handling
- Responsive design
- Frontend and backend separation
- API-based product and EMI data

## Tech Stack

### Frontend

- React
- React Router
- Vite
- JavaScript
- CSS

### Backend

- Node.js
- Express.js
- REST APIs
- CORS
- dotenv

## Project Structure

1fi-marketplace/
├── backend/
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── controllers/
│       │   ├── emiController.js
│       │   ├── orderController.js
│       │   └── productController.js
│       ├── data/
│       │   ├── emiPlans.js
│       │   └── products.js
│       └── routes/
│           ├── emiRoutes.js
│           ├── orderRoutes.js
│           └── productRoutes.js
│
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── public/
│   │   └── images/
│   │       └── products/
│   │           ├── iphone.jpg
│   │           ├── laptop.jpg
│   │           └── headphones.jpg
│   └── src/
│       ├── components/
│       │   ├── common/
│       │   ├── marketplace/
│       │   └── shop/
│       ├── context/
│       │   └── MarketplaceContext.jsx
│       ├── hooks/
│       │   ├── useEmiPlans.js
│       │   └── useProducts.js
│       ├── pages/
│       │   ├── Marketplace/
│       │   └── Shop/
│       ├── services/
│       │   └── marketplaceApi.js
│       ├── styles/
│       │   ├── global.css
│       │   └── variables.css
│       ├── utils/
│       │   ├── currency.js
│       │   └── emiCalculator.js
│       ├── App.jsx
│       └── main.jsx
│
├── .gitignore
└── README.md

## Application Flow

Shop → 1Fi Marketplace → Product Listing → View Product Details → Select Product Variant → Select EMI Plan → Proceed with EMI → Order Created → Order ID Displayed

## API Endpoints

### Health Check

GET /api/health

Returns the health status of the backend.

### Get Products

GET /api/products

Returns the available marketplace products.

### Get Product

GET /api/products/:id

Returns details for a specific product.

Example:

GET /api/products/1

### Get EMI Plans

GET /api/emi/products/:productId

Returns EMI plans available for a specific product.

Example:

GET /api/emi/products/1

### Create Order

POST /api/orders

Creates an order after validating the selected product, variant, and EMI plan.

Example request:

{
  "productId": 1,
  "variantId": 101,
  "emiPlanId": 2
}

Example response:

{
  "success": true,
  "message": "EMI plan selected successfully",
  "data": {
    "orderId": "ORD-1788529515617",
    "productId": 1,
    "productName": "iPhone 16",
    "variantId": 101,
    "variantName": "128 GB",
    "productPrice": 69999,
    "emiPlanId": 2,
    "duration": 12,
    "monthlyAmount": 5833,
    "status": "PENDING"
  }
}

## How to Run the Project

### Prerequisites

Make sure the following are installed:

- Node.js
- npm

### Start the Backend

Open a terminal and run:

cd backend
npm install
node server.js

The backend will run on:

http://localhost:5000

Health check:

http://localhost:5000/api/health

### Start the Frontend

Open another terminal and run:

cd frontend
npm install
npm run dev

The frontend will normally run on:

http://localhost:5173

Open the URL in your browser.

## Marketplace Functionality

### Product Listing

Users can view available products with:

- Product image
- Product name
- Product description
- Product price
- View Details button

### Product Details

Users can view:

- Product information
- Product image
- Product price
- Available variants
- Available EMI plans

### Variant Selection

Users can select the required product variant.

Example:

iPhone 16

- 128 GB
- 256 GB

### EMI Selection

Users can select an available EMI plan.

Example:

- 6 months — ₹12,250/month
- 12 months — ₹5,833/month
- 24 months — ₹2,917/month

### Proceed with EMI

After selecting a variant and EMI plan, the user can click:

Proceed with EMI

The frontend sends the selected information to the backend.

The backend validates the request and creates an order with a generated Order ID.

## Data Handling

Product and EMI information is retrieved through backend APIs rather than being directly hardcoded inside the UI components.

Mock product and EMI data are maintained on the backend for the assignment.

The frontend communicates with the backend using REST APIs.

## Error Handling

The application includes handling for:

- Failed product requests
- Failed EMI plan requests
- Invalid product IDs
- Invalid product variants
- Invalid EMI plans
- Failed order creation
- Missing required order information

## Loading States

Loading feedback is displayed while product and EMI information is being retrieved from the backend.

## Responsive Design

The Marketplace UI is designed to work across:

- Desktop
- Tablet
- Mobile

The product grid and product details layout adapt to smaller screen sizes.

## Shop Sections

The Shop page contains three sections:

- Top Brands
- Nearby Stores
- 1Fi Marketplace

The 1Fi Marketplace section is fully implemented for this assignment.

Top Brands and Nearby Stores are included as placeholder sections.

## Assignment Scope

This implementation focuses on the requested 1Fi Marketplace functionality within the Shop section.

The Marketplace provides:

- Product listing
- Product images
- Product details
- Product variants
- EMI plans
- EMI plan selection
- Proceed with selected EMI plan
- Backend API integration
- Responsive user interface

## Future Improvements

Possible future enhancements include:

- Real product database
- User authentication
- Payment integration
- Real EMI provider integration
- Order history
- Product search and filtering
- Inventory management

These features are outside the current assignment scope.

## Author

Sri Pravallika Malla
