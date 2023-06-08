import { useState } from 'react'

import SearchIcon from '@icons/UI/search.svg'
import ClearIcon from '@icons/UI/clear.svg'

const Search = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = useState('')

  const updateSearchQuery = ({target}) => setSearchQuery(target.value)

  const handleKeyUp = ({key, target}) => {
    if (key !== 'Enter') return
    handleSearch()
    target.blur()
  }

  const clearSearch = () => setSearchQuery('')

  const handleSearch = () => {
    if (searchQuery)
      onSearch(searchQuery)
  }

  return (
    <div className="flex w-[300px] md:w-[400px] h-10 md:h-[50px] border border-secondary rounded-3xl overflow-hidden">
      <input
        value={searchQuery}
        placeholder="Search Pokémon"
        className="w-full h-full p-4 bg-primary/50 text-white placeholder:text-grey outline-none"
        onChange={updateSearchQuery}
        onKeyUp={handleKeyUp} />

      {
        searchQuery && (
          <button
            className="mr-[10px]"
            onClick={clearSearch}>
            <img
              src={ClearIcon}
              alt="Clear"
              className="w-4" />
          </button>
        )
      }

      <button
        className="grid place-items-center w-[50px] h-full aspect-square bg-secondary"
        onClick={handleSearch}>
        <img
          src={SearchIcon}
          alt="Search"
          className="w-1/2 aspect-square" />
      </button>
    </div>
  )
}

export default Search