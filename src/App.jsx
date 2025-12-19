import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from './pages/About';  // ← Add this import
import "./App.css";
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />  {/* ← Add this line */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/wishlist" element={<Wishlist />} />  // ← Add this line
        </Routes>
      </main>
    </>
  );
}

export default App;
