// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Make sure this path is correct

const About = () => {
  return (
    <section className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">
            Welcome to <span className="gradient-text">ShopHub</span>
          </h1>
          <p className="about-subtitle">
            Your Premium Destination for Cutting-Edge Technology
          </p>
        </div>
      </div>

      <div className="about-container">
        <div className="about-main">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded with a passion for innovation, <strong>ShopHub</strong> was created to bring you the latest and most reliable tech products from around the world. We believe technology should be accessible, trustworthy, and exciting.
            </p>
            <p>
              From flagship smartphones to high-performance laptops, immersive audio devices to next-gen gaming consoles — we curate only the best so you can shop with confidence.
            </p>
          </div>

          <div className="about-section mission">
            <h2>Our Mission</h2>
            <p>
              To deliver an exceptional shopping experience through:
            </p>
            <div className="mission-grid">
              <div className="mission-card">
                <div className="mission-icon">🔒</div>
                <h3>100% Genuine</h3>
                <p>Only authentic products from official sources</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">🚀</div>
                <h3>Fast Delivery</h3>
                <p>Quick & reliable shipping across India</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">💎</div>
                <h3>Premium Quality</h3>
                <p>Handpicked top-tier brands and products</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">🛡️</div>
                <h3>Customer First</h3>
                <p>Easy returns, secure payments & 24/7 support</p>
              </div>
            </div>
          </div>

          <div className="about-section features">
            <h2>Why Thousands Trust ShopHub</h2>
            <ul className="features-list">
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>100% Genuine Products</strong>
                  <span>Directly sourced from authorized distributors</span>
                </div>
              </li>
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>Free Shipping</strong>
                  <span>On all orders above ₹5000</span>
                </div>
              </li>
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>30-Day Easy Returns</strong>
                  <span>Hassle-free return policy</span>
                </div>
              </li>
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>Secure Payments</strong>
                  <span>SSL encrypted, multiple payment options</span>
                </div>
              </li>
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>24/7 Support</strong>
                  <span>Always here to help you</span>
                </div>
              </li>
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>Exclusive Deals</strong>
                  <span>Best prices and flash offers daily</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="about-cta">
            <h2>Ready to Experience the Future?</h2>
            <p>Join thousands of happy customers who trust ShopHub for their tech needs.</p>
            <Link to="/products" className="cta-button">
              Start Shopping Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;