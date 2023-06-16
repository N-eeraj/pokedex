import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { fetchDetails, fetchEvolutionData } from '@hooks/fetchData'
import { useCapitalize } from '@hooks/common'

const pokemonDetails = () => {
  const params = useParams()
  const navigate = useNavigate()

  const pokemon = params.pokemon.toLowerCase()
  const [data, setData] = useState({})

  const loadData = async () => {
    try {
      const details = await fetchDetails(pokemon)
      const data = {}
      data.id = String(details.id).padStart(5,"#0000")
      data.image = details.image
      data.types = details.types.map(({type}) => type.name)
      data.stats = details.stats
      data.height = details.height / 10
      data.weight = details.weight / 10
      data.evolutionChain = await fetchEvolutionData(pokemon)
      setData(data)
    }
    catch {
      navigate('/pokemon/not-found')
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="flex flex-col md:flex-row md:justify-evenly items-center md:items-start py-12">
      <Link
        to="/"
        className="fixed top-3 md:top-5 left-5 text-white hover:text-secondary text-lg font-semibold duration-300">
        Back
      </Link>

      <div className="md:w-1/2">
        <div className="flex flex-col md:flex-row items-center w-[90%] max-w-[600px] border-2 border-secondary rounded-lg backdrop-blur-lg">
          <div className="relative aspect-square">
            <span className="absolute right-[90%] text-grey text-4xl origin-right -rotate-90 z-[-1]">
              {data.id}
            </span>
            <img
              src={data.image}
              alt={pokemon}
              className="width-[250px]" />
          </div>
          <div>
            <strong className="text-white">
              {useCapitalize(pokemon)}
            </strong>
          </div>
        </div>

      </div>

      <div className="w-[90%] md:w-1/2 max-w-[600px] border-2 border-white"></div>
    </div>
  )
}

export default pokemonDetails