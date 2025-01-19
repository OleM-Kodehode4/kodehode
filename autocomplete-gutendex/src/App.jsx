import React, { useState } from "react";
import Autocomplete from "./components/Autocomplete";
import BookDetails from "./components/BookDetails";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="app">
      <h1>Gutendex Book Finder</h1>
      <Autocomplete
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSelectedBook={setSelectedBook}
      />
      {selectedBook && <BookDetails book={selectedBook} />}
    </div>
  );
}

export default App;
