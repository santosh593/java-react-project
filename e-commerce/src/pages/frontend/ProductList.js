import React from 'react'
import './ProductList.css';

const ProductList = () => {
  return (
    <div className="productList">
    <div className="container">
    <aside className="sidebar">
      <h3>Availability</h3>
      <label><input type="checkbox" checked /> In Stock (9)</label>
      <label><input type="checkbox" /> Out of Stock (2)</label>

      <h3>Brand</h3>
      <label><input type="checkbox" checked /> Seeg (3)</label>
      <label><input type="checkbox"/> Wilf (2)</label>
      <label><input type="checkbox"/> Kross (5)</label>
      <label><input type="checkbox"/> Van (7)</label>

      <h3>Price</h3>
      <div className="price-range">
        <input type="range" min="0" max="359" value="190" />
        <div className="price-inputs">
          <input type="number" value="0" /> to <input type="number" value="359" />
        </div>
      </div>

      <h3>Collection</h3>
      <label><input type="checkbox" checked /> Winter</label>
      <label><input type="checkbox"/> Summer</label>
      <label><input type="checkbox"/> Autumn</label>
      <label><input type="checkbox"/> Spring</label>
    </aside>

    <main className="product-area">
      <div className="sort-bar">Sort by: <select><option>Highest Price</option></select></div>
      <div className="product-grid">
        <div className="product-card">
          <span className="badge sale">SALE</span>
          <span className="badge discount">-10%</span>
          <img src="https://via.placeholder.com/150" alt="Product" />
          <h5>KROSS</h5>
          <p className="product-name">Luma Jacket</p>
          <p className="price">$190.00</p>
        </div>
      </div>
    </main>
  </div>
  </div>
  )
}

export default ProductList
