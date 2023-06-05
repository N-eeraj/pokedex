// import { useState } from 'react'

import typeDetails from '@/typeDetails'

const Type = ({type, isSelected, staySelected, onToggle}) => {
  // const [isSelected, setIsSelected] = useState(false)

  const toggleSelected = () => {
    if (staySelected) return
    // setIsSelected(prevValue => !prevValue)
    onToggle()
  }

  return (
    <div
      className={`flex items-center gap-x-[5px] w-[180px] h-10 p-[9px] border rounded-3xl cursor-pointer duration-300 ${typeDetails[type].border} ${(isSelected || staySelected) ? typeDetails[type].background : 'bg-transparent'}`}
      onClick={toggleSelected}>
      <img
        src={typeDetails[type].icon}
        alt={type}
        className="w-7 aspect-square" />
      <span className="text-white">
        {typeDetails[type].name}
      </span>
    </div>
  )
}

export default Type