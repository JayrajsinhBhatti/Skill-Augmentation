import { useState } from "react";
import "./App.css";

export default function SearchActivitie() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:5000/api/search?q=${query}`);
      const data = await res.json();

      setResults(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("❌ Error fetching search results:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Search Activities</h2>

      <input
        type="text"
        placeholder="Enter keyword (event, category, venue, etc.)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        onClick={handleSearch}

      >
        {loading ? "Searching..." : "Search"}
      </button>

      <ul>
        {!loading && results.length === 0 && query && <li>No results found</li>}
        {results.map((item) => (
          <li key={item._id}>
            <strong>{item.eventName}</strong> <br />
            Category: {item.category} <br />
            Sub Category: {item.subCategory} <br />
            Nature: {item.nature} <br />
            Organizer: {item.organizer} <br />
            Venue: {item.venue} <br />
            Dates: {item.startDate} → {item.endDate} <br />
            Winner: {item.winner} | Position: {item.position} <br />
            Level: {item.level}
          </li>
        ))}
      </ul>
    </div>
  );
}
