import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../utils/products';
import './Home.css';

function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="home">
      <section className="hero-section fade-in-up">
        <div className="hero-content">
          <h1 className="hero-title gradient-text">Discover Premium Tech Products</h1>
          <p className="hero-subtitle">
            Explore our curated collection of high-quality electronics and accessories.
            Find the perfect gadget for your lifestyle.
          </p>
          <div className="hero-cta">
            <Link to="/products" className="btn btn-primary hover-lift">
              Shop Now
            </Link>
            <Link to="/products" className="btn btn-secondary hover-lift">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title gradient-text fade-in-up">Featured Products</h2>
          <p className="section-subtitle fade-in-up">Browse our collection of premium electronics and accessories</p>
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title gradient-text fade-in-up">Why Choose ShopHub?</h2>
          <div className="features-grid">
            <div className="feature-card glass-card fade-in-up hover-lift">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Get your products delivered quickly and safely to your doorstep</p>
            </div>
            <div className="feature-card glass-card fade-in-up hover-lift" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">🛡️</div>
              <h3>Secure Payment</h3>
              <p>Your payment information is always protected with bank-level security</p>
            </div>
            <div className="feature-card glass-card fade-in-up hover-lift" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">↩️</div>
              <h3>Easy Returns</h3>
              <p>30-day return policy for your complete peace of mind</p>
            </div>
            <div className="feature-card glass-card fade-in-up hover-lift" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>Our customer service team is always here to help you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating particles effect */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
