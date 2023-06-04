import { useState } from 'react'

import FilterIcon from '@icons/UI/filter.svg'

const TypeFilter = () => {
  const [showTypeFilter, setshowTypeFilter] = useState(false)

  const toggleTypeFilter = () => setshowTypeFilter(prevValue => !prevValue)

  return (
    <>
      <button
        className="grid place-items-center w-10 md:w-[50px] aspect-square bg-secondary rounded-lg"
        onClick={toggleTypeFilter}>
        <img
          src={FilterIcon}
          alt="Filter"
          className="w-1/2" />
      </button>
    </>
  )
}

export default TypeFilter