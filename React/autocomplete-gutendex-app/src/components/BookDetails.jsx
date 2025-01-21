function BookDetails({ book }) {
  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Authors:</strong> {book.authors.map((author) => author.name).join(', ')}</p>
      <p><strong>Subjects:</strong> {book.subjects.join(', ')}</p>
    </div>
  )
}

export default BookDetails