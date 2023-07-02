import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Details from '@components/pokemon/Details'
import EvolutionChain from '@components/pokemon/evolution/Chain'
import Stats from '@components/stats'

import { AppContext } from '@/App'
import { fetchDetails } from '@hooks/fetchData'

const pokemonDetails = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState({})
  const { pokemonData, setPokemonData } = useContext(AppContext)
  const pokemon = params.pokemon.toLowerCase()

  const loadData = async () => {
    try {
      let details
      const cachedData = pokemonData[pokemon]?.details
      if (cachedData) {
        details = cachedData
      }
      else {
        details = await fetchDetails(pokemon)
        setPokemonData(prevValue => {
          const newValue = prevValue
          newValue[pokemon] = {
            details,
            ...newValue[pokemon]
          }
          return newValue
        })
      }
      const data = {}
      data.id = String(details.id).padStart(5,"#0000")
      data.image = details.image
      data.types = details.types.map(({type}) => type.name)
      data.stats = details.stats.map(({stat, base_stat}) => {
        return {
          name: stat.name.toUpperCase(),
          value: base_stat
        }
      })
      data.height = `${details.height / 10} m`
      data.weight = `${details.weight / 10} kg`
      setData(data)
    }
    catch {
      navigate('/pokemon/not-found')
    }
  }

  useEffect(() => {
    loadData()
  }, [pokemon])

  return (
    <div className="gap-y-5 w-full p-3">
      <Link
        to="/"
        className="self-start text-white hover:text-secondary text-lg font-semibold duration-300">
        Back
      </Link>

      {
        data && (
          <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center md:items-start mt-3">
            <div className="flex flex-col items-center w-full md:w-auto">
              <Details pokemon={pokemon} data={data} />
              <EvolutionChain pokemon={pokemon} className="mt-5" />
            </div>

            <Stats stats={data.stats} />
          </div>
        )
      }
    </div>
  )
}

export default pokemonDetails