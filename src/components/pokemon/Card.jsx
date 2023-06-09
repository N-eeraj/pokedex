import { useEffect, useState } from 'react'

import Type from '@components/Type'

import { useCapitalize } from '@hooks/common'

const Card = ({pokemon}) => {
  const [types, setTypes] = useState([])

  const fetchData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await response.json()
    setTypes(data.types.map(({type}) => type.name))
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <div>
      <strong>
        {useCapitalize(pokemon)}
      </strong>

      <div>
        {types.map((type, index) => <Type type={type} staySelected key={index} />)}
      </div>
    </div>
  )
}

export default Card