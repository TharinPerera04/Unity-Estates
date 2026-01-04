import { Link } from "react-router-dom";
import "./about.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-top">
          <Link className="back-btn" to="/">← Back</Link>
          <h2>About Unity Estate</h2>
          <p>Helping people find the right home with trust, comfort, and clarity.</p>
        </div>

        <div className="about-grid">
          {/* LEFT */}
          <div className="about-card">
            <h3>Who we are</h3>
            <p>
              Unity Estate is a modern real estate platform designed to make
              property searching simple and clear. We focus on usability,
              transparency, and a smooth browsing experience.
            </p>

            <h3>What we do</h3>
            <ul>
              <li>List properties with accurate details</li>
              <li>Provide images, prices, and key information</li>
              <li>Show locations using interactive maps</li>
              <li>Help users make informed decisions</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="about-card">
            <h3>Why choose us</h3>

            <div className="feature">
              <h4>Easy to Use</h4>
              <p>Simple layout so anyone can browse properties easily.</p>
            </div>

            <div className="feature">
              <h4>Reliable Info</h4>
              <p>We focus on clear and honest property information.</p>
            </div>

            <div className="feature">
              <h4>Modern Design</h4>
              <p>Clean UI built using modern web technologies.</p>
            </div>

            <Link className="primary-btn" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="about-footer">
          <p>© {new Date().getFullYear()} Unity Estate. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
