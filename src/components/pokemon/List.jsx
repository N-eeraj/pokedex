import { useEffect, useRef, useState } from 'react'

import Card from '@components/pokemon/Card'

import { fetchPokemonList, fetchTypePokemonList } from '@hooks/fetchData'

const List = ({type}) => {
  let data = useRef([])
  const [pokemon, setPokemon] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const loadClasses = {
    loaded: 'py-1 px-5 bg-secondary hover:bg-transparent border border-secondary rounded-3xl duration-300',
    loading: 'w-10 aspect-square border-2 border-secondary rounded-full animate-ping'
  }

  const fetchFilterByType = async () => {
    if (data.value.length) {
      setPokemon(prevValue => [...prevValue, ...data.value.slice(pokemon.length, pokemon.length + 16)])
    }
    else {
      setLoading(true)
      const {count, results} = await fetchTypePokemonList(type)
      setLoading(false)
      setCount(count)
      data.value = results
      setPokemon(data.value.slice(0, 16))
    }
  }

  const fetchList = async () => {
    setLoading(true)
    const {count, results} = await fetchPokemonList(pokemon.length)
    setLoading(false)
    setCount(count)
    setPokemon(prevValue => [...prevValue, ...results])
  }

  const handleFetchList = () => {
    if (type)
      return fetchFilterByType()
    fetchList()
  }

  useEffect(() => {
    data.value = []
    setPokemon([])
    handleFetchList()
  }, [type])

  return (
    <div className="text-white">
      <div className="flex flex-wrap justify-center gap-[10px] md:gap-[25px] p-1">
        { pokemon.map(({name}, index) => <Card pokemon={name} key={index} />) }
      </div>

      <div className="flex justify-center gap-x-3 py-5">
        {
          pokemon.length < count &&
            <button
              className={loadClasses[loading ? 'loading' : 'loaded']}
              disabled={loading}
              onClick={handleFetchList}>
              {loading ? '' : 'Load More'}
            </button>
        }
      </div>
    </div>
  )
}

export default List