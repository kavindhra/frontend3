import { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../utils/products';
import './Products.css';

function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return PRODUCTS;

    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Browse our collection of premium electronics and accessories</p>
      </div>

      <div className="products-container">
        <aside className="filters">
          <div className="filter-group">
            <h3>Search</h3>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </aside>

        <main className="products-main">
          <div className="products-count">
            Showing {filteredProducts.length} products
          </div>
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>No products found. Try adjusting your search.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Products;
