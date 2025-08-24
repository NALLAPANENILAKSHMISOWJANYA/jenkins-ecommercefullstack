import React, { useState } from "react";

function ProductForm({ onAdd }) {
  const [product, setProduct] = useState({ name: "", price: "", quantity: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(product);
    setProduct({ name: "", price: "", quantity: "" });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={product.quantity}
        onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
