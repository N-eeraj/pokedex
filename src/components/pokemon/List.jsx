import { useContext, useEffect, useRef, useState } from 'react'

import Card from '@components/pokemon/Card'

import { AppContext } from '@/App'
import { fetchPokemonList, fetchTypePokemonList } from '@hooks/fetchData'

const List = ({type}) => {
  let data = useRef([])
  const [pokemon, setPokemon] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const {typeList, setTypeList} = useContext(AppContext)

  const loadClasses = {
    loaded: 'py-1 px-5 bg-secondary hover:bg-transparent border border-secondary rounded-3xl duration-300',
    loading: 'w-10 aspect-square border-2 border-secondary rounded-full animate-ping'
  }

  const fetchFilterByType = async () => {
    if (data.current.length) {
      setPokemon(prevValue => [
        ...prevValue,
        ...data.current.slice(pokemon.length, pokemon.length + 16)
      ])
    }
    else {
      let details = typeList[type]
      if (!details) {
        setLoading(true)
        details = await fetchTypePokemonList(type)
        setTypeList(prevValue => {
          const newValue = prevValue
          newValue[type] = { count: details.count, results: details.results }
          return newValue
        })
        setLoading(false)
      }
      setCount(details.count)
      data.current = details.results
      setPokemon(data.current.slice(0, 16))
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
    data.current = []
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