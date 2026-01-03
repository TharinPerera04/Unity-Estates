import "./navbar.css";
import logo from "../../assets/logo.png";
export default function Navbar() {
  return (  
    <nav className="navbar">
      <div className="brand">
        <a href="/">
          <img 
            src={logo} 
            alt="Unity Estates Logo" 
            className="logo" 
          />
        </a>
      </div>

      <ul className="links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
