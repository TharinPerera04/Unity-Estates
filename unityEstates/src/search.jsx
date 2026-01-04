import "./search.css";
import data from "./data/properties.json";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const properties = data.properties;

  const [type, setType] = useState("Any");
  const [added, setAdded] = useState("Anytime");
  const [minPrice, setMinPrice] = useState("No min");
  const [maxPrice, setMaxPrice] = useState("No max");
  const [minBeds, setMinBeds] = useState("No min");
  const [maxBeds, setMaxBeds] = useState("No max");
  const [includeSold, setIncludeSold] = useState(false);

  const [favourites, setFavourites] = useState([]);

  const isFavourite = (id) => favourites.some((p) => p.id === id);

  const addFavourite = (property) => {
    if (!isFavourite(property.id)) setFavourites((prev) => [...prev, property]);
  };

  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((p) => p.id !== id));
  };

  const clearFavourites = () => setFavourites([]);

  // ✅ Drag helpers (use a "mode" so we know add vs remove)
  const onDragStartProperty = (e, property) => {
    e.dataTransfer.setData("mode", "add");
    e.dataTransfer.setData("property", JSON.stringify(property));
  };

  const onDragStartFavourite = (e, property) => {
    e.dataTransfer.setData("mode", "remove");
    e.dataTransfer.setData("property", JSON.stringify(property));
  };

  const allowDrop = (e) => e.preventDefault();

  // ✅ Drop into Favourites (add)
  const onDropToFavourites = (e) => {
    e.preventDefault();
    const mode = e.dataTransfer.getData("mode");
    if (mode !== "add") return;

    const property = JSON.parse(e.dataTransfer.getData("property"));
    addFavourite(property);
  };

  // ✅ Drop back to Properties (remove)
  const onDropToProperties = (e) => {
    e.preventDefault();
    const mode = e.dataTransfer.getData("mode");
    if (mode !== "remove") return;

    const property = JSON.parse(e.dataTransfer.getData("property"));
    removeFavourite(property.id);
  };

  const formatPrice = (price) =>
    price ? `£${new Intl.NumberFormat("en-GB").format(price)}` : "Price on request";

  const toNumber = (val) => {
    if (!val || val === "No min" || val === "No max") return null;
    return Number(String(val).replaceAll(",", ""));
  };

  const filtered = useMemo(() => {
    const minP = toNumber(minPrice);
    const maxP = toNumber(maxPrice);
    const minB = toNumber(minBeds);
    const maxB = toNumber(maxBeds);

    return properties.filter((p) => {
      if (type !== "Any" && !String(p.type).toLowerCase().includes(type.toLowerCase()))
        return false;
      if (minP !== null && p.price < minP) return false;
      if (maxP !== null && p.price > maxP) return false;
      if (minB !== null && p.bedrooms < minB) return false;
      if (maxB !== null && p.bedrooms > maxB) return false;
      return true;
    });
  }, [properties, type, minPrice, maxPrice, minBeds, maxBeds]);

  return (
    <div className="page">
      {/* ✅ HOME HEADING */}
      <section className="hero">
        <h1 className="hero-title">Unity Estates</h1>
        <p className="hero-sub">
          Connecting people with exceptional homes.
          <br />
          Browse premium properties, explore locations, and make confident decisions.
        </p>
      </section>

      {/* SEARCH BAR */}
      <section className="search-wrap">
        <div className="search-card">
          <h2 className="search-title">Find property for sale in London</h2>

          <form className="search-grid" onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label>Property type</label>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option>Any</option>
                <option>House</option>
                <option>Flat</option>
                <option>Bungalow</option>
                <option>Land</option>
              </select>
            </div>

            <div className="field">
              <label>Added to site</label>
              <select value={added} onChange={(e) => setAdded(e.target.value)}>
                <option>Anytime</option>
                <option>Last 24 hours</option>
                <option>Last 3 days</option>
                <option>Last 7 days</option>
                <option>Last 14 days</option>
              </select>
            </div>

            <div className="field field-wide">
              <label>Price range (£)</label>
              <div className="range">
                <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
                  <option>No min</option>
                  <option>100,000</option>
                  <option>250,000</option>
                  <option>500,000</option>
                  <option>750,000</option>
                  <option>1,000,000</option>
                  <option>2,000,000</option>
                </select>
                <span className="dash">–</span>
                <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
                  <option>No max</option>
                  <option>250,000</option>
                  <option>500,000</option>
                  <option>750,000</option>
                  <option>1,000,000</option>
                  <option>2,000,000</option>
                  <option>5,000,000</option>
                </select>
              </div>
            </div>

            <div className="field field-wide">
              <label>No. of bedrooms</label>
              <div className="range">
                <select value={minBeds} onChange={(e) => setMinBeds(e.target.value)}>
                  <option>No min</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <span className="dash">–</span>
                <select value={maxBeds} onChange={(e) => setMaxBeds(e.target.value)}>
                  <option>No max</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>

            <div className="actions">
              <label className="check">
                <input
                  type="checkbox"
                  checked={includeSold}
                  onChange={(e) => setIncludeSold(e.target.checked)}
                />
                <span>Include Under Offer, Sold STC</span>
              </label>
              <button type="submit" className="search-btn">
                Search properties
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* RESULTS + FAVOURITES */}
      <div className="layout">
        {/* ✅ Make this a DROP ZONE to remove from favourites */}
        <section className="results" onDragOver={allowDrop} onDrop={onDropToProperties}>
          <div className="results-head">
            <h3>Properties</h3>
            <p>{filtered.length} results</p>
          </div>

          <div className="cards">
            {filtered.map((p) => {
              const image = p.pictures?.[0] || p.picture;
              const fav = isFavourite(p.id);

              return (
                <article
                  key={p.id}
                  className="prop-card"
                  draggable
                  onDragStart={(e) => onDragStartProperty(e, p)}
                >
                  <div className="prop-img">
                    <img src={image} alt={p.location} />
                    <span className="pill">{p.type}</span>

                    <button
                      type="button"
                      className={`fav-btn ${fav ? "active" : ""}`}
                      onClick={() => (fav ? removeFavourite(p.id) : addFavourite(p))}
                    >
                      {fav ? "♥" : "♡"}
                    </button>
                  </div>

                  <div className="prop-body">
                    <div className="prop-top">
                      <h4 className="prop-price">{formatPrice(p.price)}</h4>
                      <div className="prop-meta">
                        <span>{p.bedrooms} beds</span>
                        <span>•</span>
                        <span>{p.tenure}</span>
                      </div>
                    </div>

                    <p className="prop-loc">{p.location}</p>

                    <Link className="btn-explore" to={`/property/${p.id}`}>
                      Explore more →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ✅ Favourites drop zone to add */}
        <aside className="favourites" onDrop={onDropToFavourites} onDragOver={allowDrop}>
          <div className="fav-header">
            <h3>❤️ Favourites</h3>
            {favourites.length > 0 && (
              <button className="clear-btn" onClick={clearFavourites}>
                Clear all
              </button>
            )}
          </div>

          {favourites.length === 0 ? (
            <p className="empty">Drag properties here or click ♥</p>
          ) : (
            <ul className="fav-list">
              {favourites.map((p) => (
                <li
                  key={p.id}
                  className="fav-item"
                  draggable
                  onDragStart={(e) => onDragStartFavourite(e, p)}
                  title="Drag me back to Properties to remove"
                >
                  <img src={p.pictures?.[0] || p.picture} alt="" />
                  <div className="fav-info">
                    <span>{formatPrice(p.price)}</span>
                    <small>{p.location}</small>
                  </div>
                  <button className="remove-btn" onClick={() => removeFavourite(p.id)}>
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
    </div>
  );
}
