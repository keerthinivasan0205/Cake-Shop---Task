import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>🎂 Sweet Crumbs</h3>
          <p>Freshly baked happiness delivered to your door. Made with love, every single day.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cakes">Cakes</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div className="footer-contact" id="about">
          <h4>Contact Us</h4>
          <p>📍 12 Baker Street, Mumbai</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@sweetcrumbs.in</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Sweet Crumbs. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
