import { useEffect, useState } from 'react'

import Card from '@components/pokemon/Card'

import { fetchPokemonList } from '@hooks/fetchData'

const List = ({types}) => {
  const [pokemon, setPokemon] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const fetchFilterByType = () => {
    console.log(types)
  }

  const fetchList = async () => {
    setLoading(true)
    const {count, results} = await fetchPokemonList(pokemon.length)
    setLoading(false)
    setCount(count)
    setPokemon(prevValue => [...prevValue, ...results])
  }

  const handleFetchList = () => {
    if (types.length)
      return fetchFilterByType()
    fetchList()
  }

  useEffect(() => {
    handleFetchList()
  }, [types])
  

  return (
    <div className="text-white">
      <div className="flex flex-wrap justify-center gap-[10px] md:gap-[25px] p-1">
        { pokemon.map(({name}, index) => <Card pokemon={name} key={index} />) }
      </div>

      {
        loading ?
        (
          <div>
            loading
          </div>
        ) :
        (
          pokemon.length < count &&
            <button
              className="bg-secondary"
              onClick={handleFetchList}>
              Load More
            </button>
        )
      }
    </div>
  )
}

export default List