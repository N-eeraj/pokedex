const StatBar = ({name, value}) => {
  const bars = Math.ceil(value * 30 / 255)

  return (
    <div className="flex flex-col gap-y-1">
      <span className="self-end text-grey">{name}</span>
      <div className="flex justify-center md:justify-start md:gap-x-[5px]">
        {
          [...Array(30)].map((_, index) => (
            <div
              className={`w-[10px] h-[75px] border border-secondary md:rounded-md ${index <= bars ? 'bg-white shadow-md shadow-secondary' : 'animate-pulse'}`}
              key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default StatBar