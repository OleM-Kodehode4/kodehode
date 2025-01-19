import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

function Autocomplete({ searchQuery, setSearchQuery, setSelectedBook }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      if (searchQuery.length < 3) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const cachedResults = localStorage.getItem(searchQuery);
        if (cachedResults) {
          setResults(JSON.parse(cachedResults));
        } else {
          const response = await axios.get(
            `https://gutendex.com/books?search=${searchQuery}`
          );
          setResults(response.data.results);
          localStorage.setItem(searchQuery, JSON.stringify(response.data.results));
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    const debounceFetch = setTimeout(fetchBooks, 300); // Debouncing API-kall
    return () => clearTimeout(debounceFetch);
  }, [searchQuery]);

  return (
    <div className="autocomplete">
      <input
        type="text"
        placeholder="Search for books..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      <SearchResults results={results} onSelect={setSelectedBook} />
    </div>
  );
}

export default Autocomplete;
