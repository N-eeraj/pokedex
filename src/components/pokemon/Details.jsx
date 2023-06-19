import Type from '@components/Type'
import Measurement from '@components/Measurement'

import { useCapitalize } from '@hooks/common'

const Details = ({pokemon, data}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 w-[90%] md:w-auto p-3 bg-white/10 border-2 border-secondary rounded-lg backdrop-blur-sm">
      <div className="relative aspect-square">
        <span className="absolute right-[90%] text-white/50 text-4xl origin-right -rotate-90">
          {data.id}
        </span>
        <img
          src={data.image}
          alt={pokemon}
          className="min-w-[250px]" />
      </div>

      <div className="flex flex-col justify-evenly items-center md:items-start gap-y-3 w-full md:w-auto">
        <span className="text-white text-4xl">
          {useCapitalize(pokemon)}
        </span>

        <div className="flex justify-evenly md:justify-start md:gap-x-10 w-full">
          <Measurement label="Height" value={data.height} />
          <Measurement label="Weight" value={data.weight} />
        </div>

        <div className="flex flex-col gap-y-2">
          {data.types?.map((type, index) => (
            <Type
              type={type}
              staySelected
              key={index}
              className="scale-90 md:scale-75" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Details