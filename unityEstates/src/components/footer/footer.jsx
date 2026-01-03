import "./Footer.css";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Logo only */}
        <div className="footer-brand">
          <img
            src={logo}
            alt="Unity Estates Logo"
            className="footer-logo"
          />
          <p className="footer-tagline">
            Trusted partner in buying, selling & renting properties
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
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
