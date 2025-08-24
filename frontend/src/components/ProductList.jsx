import React from "react";

function ProductList({ products, onUpdate, onDelete }) {
  return (
    <div className="product-list">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <h3>{p.name}</h3>
          <p>₹ {p.price}</p>
          <p>Quantity {p.quantity}</p>
          <button
            onClick={() =>
              onUpdate(p.id, {
                ...p,
                name: prompt("New Name:", p.name),
                price: prompt("New Price:", p.price),
                description: prompt("New Quantity:", p.quantity),
              })
            }
          >
            ✏️ Update
          </button>
          <button onClick={() => onDelete(p.id)}>❌ Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
