import { useState, useEffect } from 'react'
import Autocomplete from './components/Autocomplete'
import SearchResults from './components/SearchResults'
import BookDetails from './components/BookDetails'
import './App.css'

function App() {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="app">
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <div className="content">
        <div className="search-section">
          <Autocomplete
            searchText={searchText}
            setSearchText={setSearchText}
            setSearchResults={setSearchResults}
          />
          <SearchResults
            searchResults={searchResults}
            setSelectedBook={setSelectedBook}
            selectedBook={selectedBook}
          />
        </div>
        {selectedBook && <BookDetails book={selectedBook} />}
      </div>
    </div>
  )
}

export default App
