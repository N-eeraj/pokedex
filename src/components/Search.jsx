const Search = () => {
  return (
    <div className="flex w-[400px] h-[50px] border border-secondary rounded-3xl overflow-hidden">
        <input
            placeholder="Search Pokémon"
            className="w-full h-full p-5 bg-transparent text-white placeholder:text-grey" />
        <button className="w-[50px] h-full aspect-square bg-secondary">
        </button>
    </div>
  )
}

export default Search