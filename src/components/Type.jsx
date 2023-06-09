import typeDetails from '@/typeDetails'

const Type = ({type, isSelected, staySelected, onToggle, className}) => {

  const toggleSelected = () => {
    if (staySelected) return
    onToggle()
  }

  return (
    <div
      className={`flex items-center gap-x-[5px] w-[180px] h-10 p-[9px] border rounded-3xl duration-300 ${(isSelected || staySelected) ? typeDetails[type].background : 'bg-transparent'} ${typeDetails[type].border} ${staySelected ? undefined : 'cursor-pointer'} ${className}`}
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