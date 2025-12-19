// src/pages/Wishlist.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
// Create this file or add to global styles

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart, getTotalWishlistItems } = useCart();

  const handleRemove = (id) => {
    removeFromWishlist(id);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    // Optional: auto-remove from wishlist after adding to cart
    // removeFromWishlist(product.id);
  };

  if (getTotalWishlistItems() === 0) {
    return (
      <section className="wishlist-empty">
        <div className="wishlist-container">
          <h1>Your Wishlist is Empty ❤️</h1>
          <p>Looks like you haven't added anything to your wishlist yet.</p>
          <Link to="/products">
            <button className="continue-shopping-btn">Continue Shopping</button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="wishlist">
      <div className="wishlist-container">
        <h1>My Wishlist ({getTotalWishlistItems()} items)</h1>

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

                <p className="wishlist-item-category">{product.category}</p>

                <div className="wishlist-item-price">
                  <strong>₹{product.price.toLocaleString('en-IN')}</strong>
                </div>

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