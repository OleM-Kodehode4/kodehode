function SearchResults({ searchResults, setSelectedBook, selectedBook }) {
  return (
    <ul>
      {searchResults.map((book) => (
        <li
          key={book.id}
          onClick={() => setSelectedBook(book)}
          className={selectedBook && selectedBook.id === book.id ? 'selected' : ''}
        >
          {book.title} by {book.authors.map((author) => author.name).join(', ')}
        </li>
      ))}
    </ul>
  )
}

export default SearchResults