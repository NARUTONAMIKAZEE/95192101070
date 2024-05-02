import React from 'react';


const productsData = [
  {
    "productName": "Laptop 3",
    "price": 9102,
    "rating": 4.82,
    "discount": 98,
    "availability": "out-of-stock"
  },
  {
    "productName": "Laptop 11",
    "price": 5683,
    "rating": 4.61,
    "discount": 56,
    "availability": "yes"
  },
  {
    "productName": "Laptop 10",
    "price": 4101,
    "rating": 4.39,
    "discount": 37,
    "availability": "out-of-stock"
  },
  {
    "productName": "Laptop 9",
    "price": 1742,
    "rating": 3.82,
    "discount": 39,
    "availability": "out-of-stock"
  },
  {
    "productName": "Laptop 1",
    "price": 1059,
    "rating": 3.79,
    "discount": 21,
    "availability": "yes"
  },
  {
    "productName": "Laptop 1",
    "price": 2236,
    "rating": 3.59,
    "discount": 63,
    "availability": "yes"
  },
  {
    "productName": "Laptop 13",
    "price": 8686,
    "rating": 3.39,
    "discount": 24,
    "availability": "yes"
  },
  {
    "productName": "Laptop 10",
   "price": 7145,
  "rating": 3.36,
    "discount": 15,
    "availability": "yes"
  },
  {
    "productName": "Laptop 14",
       "price": 9254,
    "rating": 3.23,
  "discount": 56,
    "availability": "yes"
  },
  {
    "productName": "Laptop 4",
    "price": 1258,
   "rating": 2.58,
    "discount": 33,
    "availability": "yes"
  }
];

function ProductCard({ product }) {
  return (
    <div className="product-card">
    <h3>{product.productName}</h3>
     <p>Price: ${product.price}</p>
    <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
    <button className="buy-button">Buy Now</button>
    </div>
  );
}

function App() {
  const sortedProducts = [...productsData].sort((a, b) => a.price - b.price);

  return (
    <div className="App">
   <h1>E-commerce Website</h1>
      <div className="product-list">
      {sortedProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
