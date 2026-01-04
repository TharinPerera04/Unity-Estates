import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Search from "./search";
import PropertyDetails from "./propertyDetails";
import Contact from "./contact";
import "./App.css";
import About from "./about";

// Top-level layout and client-side routes for the app shell.

export default function App() {
  return (
    <div className="app-layout">
      {/* Persistent navigation across all pages */}
      <Navbar />

      <main className="main-content">
        {/* Primary client-side routes */}
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
