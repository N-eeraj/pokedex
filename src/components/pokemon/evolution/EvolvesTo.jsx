const EvolvesTo = ({from, to}) => {
  return (
      {from}
      {
        !!to.length && (
          <>
            &gt;
            {to.map(({name, evolvesTo}, index) => <EvolvesTo from={name} to={evolvesTo} key={index} />)}
          </>
        )
      }
    </div>
  )
}

export default EvolvesTo