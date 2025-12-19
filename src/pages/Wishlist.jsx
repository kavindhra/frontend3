// src/pages/Wishlist.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart, getTotalWishlistItems } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemove = (id) => {
    removeFromWishlist(id);
  };

  if (getTotalWishlistItems() === 0) {
    return (
      <section className="wishlist-empty">
        <div className="empty-content">
          <h1>Your Wishlist is Empty</h1>
          <p>Save products you love for later</p>
          <Link to="/products">
            <button className="continue-shopping-btn">Browse Products</button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="wishlist">
      <div className="wishlist-header">
        <h1>My Wishlist ({getTotalWishlistItems()})</h1>
      </div>

      <div className="wishlist-container">
        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <div key={product.id} className="wishlist-item-card">
              <Link to={`/product/${product.id}`} className="wishlist-image-link">
                <img src={product.image} alt={product.name} className="wishlist-item-image" />
              </Link>

              <div className="wishlist-item-info">
                <Link to={`/product/${product.id}`} className="wishlist-item-name">
                  <h3>{product.name}</h3>
                </Link>

                <p className="wishlist-item-price">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>

                <div className="wishlist-item-actions">
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;