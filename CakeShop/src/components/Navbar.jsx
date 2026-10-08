import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {

  // This controls whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">

      {/* Logo / Brand name */}
      <Link to="/" className="navbar-brand" onClick={closeMenu}>
        🎂 Sweet Crumbs
      </Link>

      {/* Hamburger button - only visible on mobile */}
      <button className="hamburger" onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Nav links - on mobile, shown only when menuOpen is true */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>

        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>

        <li>
          <Link to="/cakes" onClick={closeMenu}>Cakes</Link>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>About</a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>

        <li>
          <Link to="/cart" onClick={closeMenu}>
            🛒 Cart
            {/* Show item count badge only if cart has items */}
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </li>

        <li>
          <Link to="/login" className="btn-nav" onClick={closeMenu}>Login</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
