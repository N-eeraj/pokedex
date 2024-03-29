import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Search from '@components/top-bar/Search'
import TypeFilter from '@components/top-bar/TypeFilter'
import PokemonList from '@components/pokemon/List'

const Home = () => {
  const navigate = useNavigate()

  const [filterType, setFilterType] = useState(null)

  const handleSearch = searchQuery => navigate(`/pokemon/${searchQuery.toLowerCase()}`)

  const handleTypeFilter = type => setFilterType(type)

  return (
    <main>
      <div className="flex justify-evenly md:justify-end items-center md:items-end md:gap-x-[30px] h-[100px] mb-[25px] md:px-[50px]">
        <Search onSearch={handleSearch} />
        <TypeFilter onFilter={handleTypeFilter} />
      </div>

      <PokemonList type={filterType} />
    </main>
  )
}

export default Home