import { useState } from "react";
import { Link } from "react-router-dom";
import "./contact.css";

// Contact form with optimistic success message (no backend wiring yet).
export default function Contact() {
  // Track controlled inputs for the form.
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Keep individual field changes in sync with local state.
  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Lightweight submit handler that just shows a success toast for now.
  const onSubmit = (e) => {
    e.preventDefault();

    // For now just show a success message (no backend)
    setStatus("✅ Message sent! We will contact you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });

    // If you want to connect EmailJS / backend later, tell me.
  };

  return (
    <div className="contact-page">
      <div className="contact-top">
        <Link className="back-btn" to="/">← Back</Link>
        <h2>Contact Us</h2>
        <p>Have a question? Send us a message and we’ll get back to you.</p>
      </div>

      <div className="contact-grid">
        {/* Left info */}
        <div className="contact-card">
          <h3>Get in touch</h3>

          <div className="info-row">
            <span className="label">Email:</span>
            <span>unityestate@gmail.com</span>
          </div>

          <div className="info-row">
            <span className="label">Phone:</span>
            <span>+94 77 123 4567</span>
          </div>

          <div className="info-row">
            <span className="label">Address:</span>
            <span>Colombo, Sri Lanka</span>
          </div>

          <div className="note">
            We are available Monday–Saturday, 9:00 AM – 6:00 PM.
          </div>
        </div>

        {/* Right form */}
        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Full Name
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="Enter your email"
              required
            />
          </label>

          <label>
            Subject
            <input
              name="subject"
              value={form.subject}
              onChange={onChange}
              placeholder="What is this about?"
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Type your message..."
              rows="6"
              required
            />
          </label>

          <button className="send-btn" type="submit">Send Message</button>

          {/* Status message appears after submit */}
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </div>
  );
}
