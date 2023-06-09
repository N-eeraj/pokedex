import { useEffect, useState } from 'react'

import Type from '@components/Type'

import { useCapitalize } from '@hooks/common'

import pokeball from '@images/card-background.svg'

const Card = ({pokemon}) => {
  const [types, setTypes] = useState([])
  const pokemonImage = `https://img.pokemondb.net/sprites/home/normal/${pokemon}.png`

  const fetchData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await response.json()
    setTypes(data.types.map(({type}) => type.name))
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <div className="group w-[45%] md:w-[20%] aspect-[5/9] md:aspect-[5/7] bg-secondary/10 border border-secondary rounded-lg backdrop-blur-[7px] cursor-pointer shadow-md hover:shadow-secondary duration-300">
      <div
        style={{backgroundImage: `url(${pokeball})`}}
        className="grid place-items-center h-1/2 bg-[length:60%] bg-center bg-no-repeat overflow-hidden">
        <img
          src={pokemonImage}
          alt={pokemon}
          className="w-[75%] group-hover:w-full group-hover:h-full h-[80%] object-contain duration-300" />
      </div>

      <div className="flex flex-col items-center gap-y-[10px] h-1/2 p-5 bg-primary/50 backdrop-blur-[10px] rounded-b-lg">
        <strong>
          {useCapitalize(pokemon)}
        </strong>

        <div className="flex flex-col justify-center md:gap-y-[5px] lg:gap-y-[10px]">
          {types.map((type, index) => (
            <Type
              type={type}
              staySelected
              key={index}
              className="scale-75 md:scale-90" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card