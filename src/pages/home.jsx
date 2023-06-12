import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Search from '@components/top-bar/Search'
import TypeFilter from '@components/top-bar/TypeFilter'
import PokemonList from '@components/pokemon/List'

import background from '@images/background.png'

const Home = () => {
  const navigate = useNavigate()

  const [filterTypes, setFilterTypes] = useState([])

  const handleSearch = searchQuery => navigate(`/pokemon/${searchQuery.toLowerCase()}`)

  const handleTypeFilter = types => setFilterTypes(types)

  return (
    <>
      <img
        src={background}
        alt="background"
        className="fixed top-0 left-0 w-screen h-screen object-cover" />

      <main className="absolute w-screen min-h-screen">
        <div className="flex justify-evenly md:justify-end items-center md:items-end md:gap-x-[30px] h-[100px] mb-[25px] md:px-[50px]">
          <Search onSearch={handleSearch} />
          <TypeFilter onFilter={handleTypeFilter} />
        </div>

        <PokemonList types={filterTypes} />
      </main>
    </>
  )
}

export default Home