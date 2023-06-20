import { useEffect, useState } from 'react'

import EvolvesTo from '@components/pokemon/evolution/EvolvesTo'

import { fetchEvolutionData } from '@hooks/fetchData'

const EvolutionChain = ({pokemon, className}) => {
  const [evolutionChain, setEvolutionChain] = useState(null)

  const fetchChain = async () => {
    const chain = await fetchEvolutionData(pokemon)
    setEvolutionChain(chain)
  }

  useEffect(() => {
    fetchChain()
  }, [])

  return (
    <>
      {
        evolutionChain &&
        <div className={`w-full h-full text-white ${className}`}>
          <EvolvesTo
            from={evolutionChain.name}
            to={evolutionChain.evolvesTo} />
        </div>
      }
    </>
  )
}

export default EvolutionChain