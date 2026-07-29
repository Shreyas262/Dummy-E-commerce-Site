import './footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      
      <div className="container footer-container">

        <div className="footer-brand">

          <Link to="/">
            <h2>ShopEase</h2>
          </Link>
          
          <p>Your one-stop destination for quality products at the best prices.</p>

        </div>
        <div className="footer-links">

          <h3>Quick Links</h3>
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/cart"}>Cart</Link>
          <Link to={"/wishlist"}>Wishlist</Link>
          <Link to={"/auth/login"}>Login</Link>

        </div>
        <div className="footer-contact">

          <h3>Contact</h3>
          <dl>

            <dt>Email</dt>
            <dd>support@shopease.com</dd>            

            <dt>Phone</dt>
            <dd>+91 98765 43210</dd>

            <dt>Location</dt>
            <dd>India</dd>

          </dl>

        </div>

      </div>

      <div className="footer-bottom">

          <p>© 2026 ShopEase. All rights reserved.</p>

        </div>
    
    </footer>
  );
}

export default Footer
