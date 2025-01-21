import { useEffect, useState } from 'react'

function Autocomplete({ searchText, setSearchText, setSearchResults }) {
  const [error, setError] = useState(null)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchText.length >= 3) {
        fetch(`https://gutendex.com/books?search=${searchText}`)
          .then((response) => response.json())
          .then((data) => {
            setSearchResults(data.results)
            setError(null)
          })
          .catch((error) => {
            console.error('Error fetching data:', error)
            setError('Failed to fetch data')
          })
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [searchText, setSearchResults])

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for books..."
      />
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default Autocomplete