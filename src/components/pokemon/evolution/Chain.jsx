import { useContext, useEffect, useState } from 'react'

import EvolvesTo from '@components/pokemon/evolution/EvolvesTo'

import { AppContext } from '@/App'
import { fetchEvolutionData } from '@hooks/fetchData'

const EvolutionChain = ({pokemon, className}) => {
  const [chain, setChain] = useState(null)
  const { pokemonData, setPokemonData } = useContext(AppContext)

  const fetchChain = async () => {
    let evolutionChain
    const cachedData = pokemonData[pokemon]?.evolutionChain
    if (cachedData) {
      evolutionChain = cachedData
    }
    else {
      evolutionChain = await fetchEvolutionData(pokemon)
      setPokemonData(prevValue => {
        const newValue = prevValue
        newValue[pokemon] = {
          evolutionChain,
          ...newValue[pokemon]
        }
        return newValue
      })
    }
    setChain(evolutionChain)
  }

  useEffect(() => {
    fetchChain()
  }, [])

  return (
    <>
      {
        chain &&
        <div className={`w-full h-full text-white overflow-x-auto ${className}`}>
          <EvolvesTo
            from={chain.name}
            to={chain.evolvesTo} />
        </div>
      }
    </>
  )
}

export default EvolutionChain