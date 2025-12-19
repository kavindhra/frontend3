import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProductById } from '../utils/products';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-details">
      <div className="product-details-container">
        <button className="back-btn" onClick={() => navigate('/products')}>
          ← Back to Products
        </button>

        <div className="details-grid">
          <div className="details-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="details-info">
            <h1>{product.name}</h1>

            <div className="details-rating">
              <span className="stars">⭐ {product.rating} / 5</span>
              <span className="reviews">({product.reviews} customer reviews)</span>
            </div>

            <div className="details-price">
              <h2>₹{product.price}</h2>
            </div>

            <div className="details-category">
              <span className="category-badge">{product.category}</span>
            </div>

            <p className="details-description">{product.description}</p>

            <div className="details-features">
              <h3>Key Features:</h3>
              <ul>
                <li>Premium quality materials</li>
                <li>Extended warranty included</li>
                <li>Free shipping on orders over ₹5000</li>
                <li>Easy 30-day returns</li>
              </ul>
            </div>

            <button className="add-to-cart-large" onClick={handleAddToCart}>
              Add to Cart
            </button>

            <div className="details-guarantee">
              <p>✓ 100% Money Back Guarantee</p>
              <p>✓ Genuine Product</p>
              <p>✓ Fast Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
