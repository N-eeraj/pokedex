import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Details from '@components/pokemon/Details'

import { fetchDetails, fetchEvolutionData } from '@hooks/fetchData'

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
        { data && <Details pokemon={pokemon} data={data} /> }
      </div>

      <div className="w-[90%] md:w-1/2 max-w-[600px] h-full border-2 border-white"></div>
    </div>
  )
}

export default pokemonDetails