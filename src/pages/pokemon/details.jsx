import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Type from '@components/Type'

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
      data.height = `${details.height / 10} m`
      data.weight = `${details.weight / 10} kg`
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
    <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center md:items-start w-full py-12 md:py-[60px]">
      <Link
        to="/"
        className="fixed top-3 md:top-5 left-5 text-white hover:text-secondary text-lg font-semibold duration-300">
        Back
      </Link>

      <div className="flex flex-col items-center w-full md:w-1/2">
        <div className="flex flex-col md:flex-row items-center gap-5 w-[90%] md:w-auto p-3 bg-white/10 border-2 border-secondary rounded-lg backdrop-blur-lg">
          <div className="relative aspect-square">
            <span className="absolute right-[90%] text-grey text-4xl origin-right -rotate-90 z-[-1]">
              {data.id}
            </span>
            <img
              src={data.image}
              alt={pokemon}
              className="min-w-[250px]" />
          </div>

          <div className="flex flex-col justify-evenly items-center md:items-start gap-y-3 w-full md:w-auto">
            <span className="text-white text-4xl">
              {useCapitalize(pokemon)}
            </span>

            <div className="flex justify-evenly md:justify-start md:gap-x-10 w-full">
              <div className="flex flex-col">
                <span className="text-grey md:text-lg">
                  Height
                </span>
                <span className="text-white text-2xl md:text-3xl">
                  {data.height}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-grey md:text-lg">
                  Weight
                </span>
                <span className="text-white text-2xl md:text-3xl">
                  {data.weight}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              {data.types?.map((type, index) => (
                <Type
                  type={type}
                  staySelected
                  key={index}
                  className="scale-90 md:scale-75" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] md:w-1/2 max-w-[600px] h-full border-2 border-white"></div>
    </div>
  )
}

export default pokemonDetails