import { useRef } from 'react'

const Search = ({onSearch}) => {
  const searchBar = useRef('')

  const handleKeyUp = ({key, target}) => {
    if (key !== 'Enter') return
      target.blur()
      handleSearch()
  }

  const handleSearch = () => {
    onSearch(searchBar.current.value)
  }

  return (
    <div className="flex w-[400px] h-[50px] border border-secondary rounded-3xl overflow-hidden">
        <input
            ref={searchBar}
            placeholder="Search Pokémon"
            className="w-full h-full p-5 bg-transparent text-white placeholder:text-grey"
            onKeyUp={handleKeyUp} />
        <button
            className="w-[50px] h-full aspect-square bg-secondary"
            onClick={handleSearch}>
        </button>
    </div>
  )
}

export default Search