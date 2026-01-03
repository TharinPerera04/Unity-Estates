import { useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "./data/properties.json";
import "./PropertyDetails.css";

export default function PropertyDetails() {
  const { id } = useParams();

  const prop = useMemo(
    () => data.properties.find((p) => String(p.id) === String(id)),
    [id]
  );

  const images = (prop?.pictures || []).slice(0, 6);
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  if (!prop) {
    return (
      <div className="details-page">
        <Link className="back-btn" to="/">← Back</Link>
        <h2>Property not found</h2>
      </div>
    );
  }

  /* Price format */
  const formatPrice = (price) =>
    price
      ? `£${new Intl.NumberFormat("en-GB").format(price)}`
      : "Price on request";

  /* Safe map embed (no pb errors) */
  const getMapEmbedSrc = (mapValue, location) => {
    const raw = (mapValue || "").trim();

    if (raw.includes("/maps/embed") && raw.includes("pb=")) {
      return raw;
    }

    const q = encodeURIComponent(location || "London");
    return `https://www.google.com/maps?q=${q}&output=embed`;
  };

  const mapSrc = getMapEmbedSrc(prop.map, prop.location);

  /* Slider */
  const scrollToIndex = (i) => {
    const el = trackRef.current;
    if (!el) return;
    el.children[i]?.scrollIntoView({ behavior: "smooth", inline: "start" });
    setActive(i);
  };

  return (
    <div className="details-page">
      <div className="details-topbar">
        <Link className="back-btn" to="/">← Back</Link>
      </div>

      <div className="details-grid">
        {/* LEFT COLUMN */}
        <div className="gallery">
          <h2 className="price">{formatPrice(prop.price)}</h2>

          <p className="meta">
            {prop.bedrooms} beds • {prop.tenure} • {prop.type}
          </p>

          <p className="location">{prop.location}</p>

          {/* Image slider */}
          <div className="slider">
            <button
              className="nav"
              onClick={() => scrollToIndex(Math.max(active - 1, 0))}
              disabled={active === 0}
            >
              ‹
            </button>

            <div className="track" ref={trackRef}>
              {images.map((src, i) => (
                <div className="slide" key={i}>
                  <img src={src} alt={`Property ${i + 1}`} />
                </div>
              ))}
            </div>

            <button
              className="nav"
              onClick={() =>
                scrollToIndex(Math.min(active + 1, images.length - 1))
              }
              disabled={active === images.length - 1}
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div className="dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === active ? "active" : ""}`}
                onClick={() => scrollToIndex(i)}
              />
            ))}
          </div>

          {/* Floorplan button */}
          <div className="actions">
            {prop.floorplan ? (
              <a
                className="btn"
                href={prop.floorplan}
                target="_blank"
                rel="noreferrer"
              >
                See floorplan
              </a>
            ) : (
              <button className="btn disabled" disabled>
                See floorplan
              </button>
            )}
          </div>

          <h3>About this property</h3>
          <p className="desc">{prop.description}</p>
        </div>

        {/* RIGHT COLUMN – MAP */}
        <div className="mapbox">
          <h3>Location</h3>
          <iframe
            className="map"
            src={mapSrc}
            loading="lazy"
            allowFullScreen
            title="Property location"
          />
        </div>
      </div>
    </div>
  );
}
