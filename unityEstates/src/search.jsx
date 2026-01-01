import "./Search.css";

export default function Search() {
  return (
    <section className="search-wrap">
      <div className="search-card">
        <h2 className="search-title">Find property for sale in London</h2>

        <form className="search-grid">
          {/* Search radius */}
          <div className="field">
            <label>Search radius</label>
            <select>
              <option>This area only</option>
              <option>Within 1 mile</option>
              <option>Within 3 miles</option>
              <option>Within 5 miles</option>
              <option>Within 10 miles</option>
            </select>
          </div>

          {/* Property types */}
          <div className="field">
            <label>Property types</label>
            <select>
              <option>Any</option>
              <option>House</option>
              <option>Flat</option>
              <option>Bungalow</option>
              <option>Land</option>
            </select>
          </div>

          {/* Added to site */}
          <div className="field">
            <label>Added to site</label>
            <select>
              <option>Anytime</option>
              <option>Last 24 hours</option>
              <option>Last 3 days</option>
              <option>Last 7 days</option>
              <option>Last 14 days</option>
            </select>
          </div>

          {/* Price range */}
          <div className="field field-wide">
            <label>Price range (£)</label>
            <div className="range">
              <select>
                <option>No min</option>
                <option>100,000</option>
                <option>200,000</option>
                <option>300,000</option>
                <option>500,000</option>
                <option>750,000</option>
                <option>1,000,000</option>
              </select>

              <span className="dash">–</span>

              <select>
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

          {/* Bedrooms */}
          <div className="field field-wide">
            <label>No. of bedrooms</label>
            <div className="range">
              <select>
                <option>No min</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>

              <span className="dash">–</span>

              <select>
                <option>No max</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>

          {/* Right column: checkbox + button */}
          <div className="actions">
            <label className="check">
              <input type="checkbox" />
              <span>Include Under Offer, Sold STC</span>
            </label>

            <button type="submit" className="search-btn">
              Search properties
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
