import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-col footer-brand">
          <h2>Unity Estates</h2>
          <p>
            Trusted real estate partner for buying, selling, and renting
            premium properties.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>📧 info@unityestates.com</p>
          <p>📞 +94 77 123 4567</p>
          <p>📍 Colombo, Sri Lanka</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Unity Estates. All rights reserved.</p>
      </div>
    </footer>
  );
}
