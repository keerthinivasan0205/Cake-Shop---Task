import { useState } from "react";
import CakeCard from "../components/CakeCard";
import cakes from "../data/cakes";

const categories = ["All", "Birthday", "Chocolate", "Wedding", "Anniversary"];

function Cakes({ addToCart }) {

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter cakes based on search text and selected category
  const filteredCakes = [];

  for (let i = 0; i < cakes.length; i++) {
    const cake = cakes[i];

    // Check if cake name matches the search text
    const nameMatches = cake.name.toLowerCase().includes(search.toLowerCase());

    // Check if cake matches the selected category
    const categoryMatches = selectedCategory === "All" || cake.category === selectedCategory;

    // Only add cake to list if both conditions are true
    if (nameMatches && categoryMatches) {
      filteredCakes.push(cake);
    }
  }

  return (
    <div className="section">
      <div className="container">

        <h2 className="section-title">Our Cakes</h2>

        {/* Search Input */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search cakes..."
            value={search}
            onChange={function (e) { setSearch(e.target.value); }}
            className="search-input"
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="filter-tabs">
          {categories.map(function (cat) {
            return (
              <button
                key={cat}
                className={selectedCategory === cat ? "filter-tab active" : "filter-tab"}
                onClick={function () { setSelectedCategory(cat); }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Show message if no cakes found */}
        {filteredCakes.length === 0 && (
          <p className="no-results">No cakes found. Try a different search.</p>
        )}

        {/* Show cake cards */}
        <div className="cakes-grid">
          {filteredCakes.map(function (cake) {
            return <CakeCard key={cake.id} cake={cake} addToCart={addToCart} />;
          })}
        </div>

      </div>
    </div>
  );
}

export default Cakes;
