import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { fetchPokemonData } from '@hooks/fetchData'

const pokemonDetails = () => {
  const params = useParams()
  const navigate = useNavigate()

  const loadData = async () => {
    try {
      const data = await fetchPokemonData(params.pokemon)
      console.log(data)
    }
    catch {
      navigate('/pokemon/not-found')
    }
  }

  useState(() => {
    loadData()
  }, [])

  return (
    <div>pokemon-details</div>
  )
}

export default pokemonDetails