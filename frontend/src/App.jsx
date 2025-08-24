import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  // Load products
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await axios.get("http://localhost:9000/products");
    setProducts(res.data);
  };

  const addProduct = async (product) => {
    await axios.post("http://localhost:9000/products", product);
    loadProducts();
  };

  const updateProduct = async (id, product) => {
    await axios.put(`http://localhost:9000/products/${id}`, product);
    loadProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:9000/products/${id}`);
    loadProducts();
  };

  return (
    <div className="app">
      <h1>🛍️ E-Commerce Product Manager</h1>
      <ProductForm onAdd={addProduct} />
      <ProductList
        products={products}
        onUpdate={updateProduct}
        onDelete={deleteProduct}
      />
    </div>
  );
}

export default App;
