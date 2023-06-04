import { useRef } from 'react'

const Search = ({onSearch}) => {
  const searchBar = useRef('')

  const handleKeyUp = ({key, target}) => {
    if (key !== 'Enter') return
      target.blur()
      handleSearch()
  }

  const clearSearch = () => {
    searchBar.current.value = ''
  }

  const handleSearch = () => {
    if (searchBar.current.value)
      onSearch(searchBar.current.value)
  }

  return (
    <div className="flex w-[300px] md:w-[400px] h-[50px] border border-secondary rounded-3xl overflow-hidden">
      <input
        ref={searchBar}
        placeholder="Search Pokémon"
        className="w-full h-full p-4 bg-transparent text-white placeholder:text-grey outline-none"
        onKeyUp={handleKeyUp} />

      <button
        className="mr-[10px]"
        onClick={clearSearch}>
        <img
          src="/icons/clear.svg"
          alt="clear"
          className="w-4" />
      </button>

      <button
        className="grid place-items-center w-[50px] h-full aspect-square bg-secondary"
        onClick={handleSearch}>
        <img
          src="/icons/search.svg"
          alt="Search"
          className="w-6 aspect-square" />
      </button>
    </div>
  )
}

export default Search