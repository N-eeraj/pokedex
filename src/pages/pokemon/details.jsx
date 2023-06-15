import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { fetchDetails, fetchEvolutionData } from '@hooks/fetchData'

const pokemonDetails = () => {
  const params = useParams()
  const navigate = useNavigate()

  const pokemon = params.pokemon.toLowerCase()
  const [data, setData] = useState(null)

  const loadData = async () => {
    try {
      const details = await fetchDetails(pokemon)

      const data = {}
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
    <div>
      <span className="text-white"> {JSON.stringify(data)} </span>
    </div>
  )
}

export default pokemonDetails