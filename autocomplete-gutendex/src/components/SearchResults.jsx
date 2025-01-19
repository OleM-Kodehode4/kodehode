import React from "react";

function SearchResults({ results, onSelect }) {
  if (!results.length) return null;

  return (
    <ul className="search-results">
      {results.map((book) => (
        <li
          key={book.id}
          onClick={() => onSelect(book)}
          className="search-result-item"
        >
          <strong>{book.title}</strong> by{" "}
          {book.authors.map((author) => author.name).join(", ")}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
