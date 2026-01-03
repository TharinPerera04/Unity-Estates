import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Search from "./search";
import PropertyDetails from "./PropertyDetails";
import "./App.css";

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
