import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Type from '@components/Type'

import { fetchDetails } from '@hooks/fetchData'
import { useCapitalize } from '@hooks/common'

import pokeball from '@images/card-background.svg'

const Card = ({pokemon}) => {
  const navigate = useNavigate()

  const [types, setTypes] = useState([])
  const [pokemonImage, setPokemonImage] = useState(null)

  const fetchData = async () => {
    const {types, image} = await fetchDetails(pokemon)
    setTypes(types.map(({type}) => type.name))
    setPokemonImage(image)
  }

  const viewPokemon = () => navigate(`/pokemon/${pokemon.toLowerCase()}`)

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <div
      className="group w-[45%] md:w-[20%] bg-secondary/10 border border-secondary rounded-lg backdrop-blur-[7px] cursor-pointer shadow-md hover:shadow-secondary duration-300"
      onClick={viewPokemon}>
      <div
        style={{backgroundImage: `url(${pokeball})`}}
        className="grid place-items-center h-1/2 bg-[length:60%] bg-center bg-no-repeat group-hover:backdrop-brightness-150 overflow-hidden">
        <img
          src={pokemonImage}
          alt={pokemon}
          className="w-[75%] group-hover:scale-125 h-[80%] object-contain grayscale-[50%] group-hover:grayscale-0 duration-300" />
      </div>

      <div className="flex flex-col items-center gap-y-[10px] h-1/2 p-5 bg-primary/50 backdrop-blur-[10px] rounded-b-lg">
        <strong className="lg:text-lg">
          {useCapitalize(pokemon)}
        </strong>

        <div className="flex flex-col justify-center md:gap-y-[5px] lg:gap-y-[10px] pb-2">
          {types.map((type, index) => (
            <Type
              type={type}
              staySelected
              key={index}
              className="scale-75 md:scale-80 lg:scale-90" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card