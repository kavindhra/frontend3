// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        <h1>About ShopHub</h1>
        <p className="about-intro">
          Welcome to <strong>ShopHub</strong> — your one-stop destination for the latest and greatest in tech!
        </p>

        <div className="about-content">
          <p>
            We bring you premium smartphones, laptops, headphones, smartwatches, gaming consoles, and more from top brands like Apple, Samsung, Sony, Google, Bose, and others.
          </p>
          <p>
            Our mission is to provide a seamless shopping experience with genuine products, fast delivery, easy returns, and unbeatable prices.
          </p>

          <h2>Why Choose Us?</h2>
          <ul className="about-features">
            <li>✓ 100% Genuine Products</li>
            <li>✓ Free Shipping on orders above ₹5000</li>
            <li>✓ 30-Day Easy Returns</li>
            <li>✓ Secure Payment Options</li>
            <li>✓ 24/7 Customer Support</li>
            <li>✓ Latest Deals & Offers</li>
          </ul>

          <p className="about-closing">
            Thank you for trusting ShopHub. Happy Shopping! 🛍️
          </p>

          <Link to="/products" className="shop-now-btn">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;