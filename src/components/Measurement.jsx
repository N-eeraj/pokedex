const Measurements = ({label, value}) => {
  return (
    <div className="flex flex-col">
      <span className="text-grey md:text-lg">
        {label}
      </span>
      <span className="text-white text-2xl md:text-3xl">
        {value}
      </span>
    </div>
  )
}

export default Measurements