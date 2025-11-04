import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  // Show limited nav links on home page only
  const isHomePage = pathname === "/";

  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          {!isHomePage && (
            <>
              <li><Link to="/service-selection">Services</Link></li>
              <li><Link to="/summary">Quotation</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
