import StatBar from '@components/stats/Bar'

const Stats = ({stats}) => {
  return (
    <div className="flex flex-col gap-y-3 w-[90%] md:w-1/2 max-w-[600px] h-full mt-5">
      {
        stats?.map(({name, value}, index) => (
          <StatBar
            name={name}
            value={value}
            key={index} />
        ))
      }
    </div>
  )
}

export default Stats