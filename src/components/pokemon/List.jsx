import { useEffect, useState } from 'react'

import Card from '@components/pokemon/Card'

const List = ({types}) => {
  const [pokemon, setPokemon] = useState([])
  const [count, setCount] = useState(0)

  const fetchFilterByType = () => {
    console.log(types)
  }

  const fetchList = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pokemon.length}&limit=16`)
    const {count, results} = await response.json()
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
  }, [name, types])
  

  return (
    <div className="text-white">
      <div className="flex flex-wrap justify-center gap-[10px] md:gap-[25px] p-1">
        { pokemon.map(({name}, index) => <Card pokemon={name} key={index} />) }
      </div>

      {
        (pokemon.length < count) &&
        <button
          className="bg-secondary"
          onClick={handleFetchList}>
          Load More
        </button>
      }
    </div>
  )
}

export default List