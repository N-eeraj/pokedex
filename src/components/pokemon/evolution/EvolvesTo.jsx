import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Type from '@components/Type'

import { AppContext } from '@/App'
import { fetchDetails } from '@hooks/fetchData'
import { useCapitalize } from '@hooks/common'

import DoubleArrowIcon from '@icons/UI/double-arrow.svg'

const EvolvesTo = ({from, to}) => {
  const navigate = useNavigate()
  const [pokemon, setPokemon] = useState({})
  const { pokemonData, setPokemonData } = useContext(AppContext)

  const loadData = async () => {
    let details
    const cachedData = pokemonData[from]?.details
    if (cachedData) {
      details = cachedData
    }
    else {
      details = await fetchDetails(from)
      setPokemonData(prevValue => {
        const newValue = prevValue
        newValue[from] = {
          details,
          ...newValue[from]
        }
        return newValue
      })
    }
    setPokemon({
      name: from,
      image: details.image,
      types: details.types.map(({type}) => type.name)
    })
  }

  const handleClick = () => navigate(`/pokemon/${pokemon.name}`)

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="flex justify-start md:justify-around items-center">
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={handleClick}>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-[150px]" />
        <span>
          {useCapitalize(pokemon.name)}
        </span>
        <div className="flex flex-col justify-center md:gap-y-[5px] lg:gap-y-[10px] pb-2">
          { pokemon.types && pokemon.types.map((type, index) => (
            <Type
              type={type}
              staySelected
              key={index}
              className="scale-75 md:scale-80 lg:scale-90" />
          ))}
        </div>
      </div>

      {
        !!to.length && (
          <div className="flex flex-col">
            {to.map(({name, evolvesTo}, index) => (
              <div
                key={index}
                className="flex">
                <img
                  src={DoubleArrowIcon}
                  alt="Evolves to"
                  className="w-10" />

                <EvolvesTo
                  from={name}
                  to={evolvesTo} />
              </div>
            ))}
          </div>
        )
      }
    </div>
  )
}

export default EvolvesTo