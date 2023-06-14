import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { fetchPokemonData, fetchPokemonSpeciesData } from '@hooks/fetchData'

const pokemonDetails = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState(null)

  const loadData = async () => {
    try {
      const details = await fetchPokemonData(params.pokemon)
      const species = await fetchPokemonSpeciesData(params.pokemon)
      setData({
        ...details,
        ...species
      })
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