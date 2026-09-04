const products = [
  {
    id: 1,
    name: "iPhone 16",
    description:
      "The latest iPhone with powerful performance and an advanced camera system.",
    price: 69999,
    image: "/images/products/iphone.jpg",

    variants: [
      { id: 101, name: "128 GB", price: 69999 },
      { id: 102, name: "256 GB", price: 79999 }
    ]
  },

  {
    id: 2,
    name: "MacBook Air",
    description:
      "Lightweight laptop with powerful performance for everyday productivity.",
    price: 99999,
    image: "/images/products/laptop.jpg",

    variants: [
      { id: 201, name: "8 GB / 256 GB", price: 99999 },
      { id: 202, name: "16 GB / 512 GB", price: 119999 }
    ]
  },

  {
    id: 3,
    name: "Sony WH-1000XM5",
    description:
      "Premium wireless headphones with industry-leading noise cancellation.",
    price: 29999,
    image: "/images/products/headphones.jpg",

    variants: [
      { id: 301, name: "Black", price: 29999 },
      { id: 302, name: "Silver", price: 29999 }
    ]
  }
];

module.exports = products;