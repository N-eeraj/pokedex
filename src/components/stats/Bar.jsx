import { useEffect, useState } from 'react'

const StatBar = ({name, value}) => {
  const [viewBars, setViewBars] = useState(0)

  const bars = Math.ceil(value * 30 / 255)

  useEffect(() => {
    const animatedBars = setInterval(() => setViewBars(prevValue => {
      if (prevValue === 30)
        clearInterval(animatedBars)
      return ++prevValue
    }), 30)
  }, [])

  return (
    <div className="flex flex-col gap-y-1">
      <span className="self-end text-grey">{name}</span>
      <div className="flex justify-center md:justify-start md:gap-x-[5px]">
        {
          [...Array(30)].map((_, index) => (
            <div
              className={`w-[10px] h-[75px] border border-secondary md:rounded-md duration-500 ${index <= bars ? 'bg-white shadow-md shadow-secondary' : 'animate-pulse'} ${index <= viewBars ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
              key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default StatBar