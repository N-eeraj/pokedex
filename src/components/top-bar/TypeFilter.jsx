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

      <div
        className={`fixed top-0 left-0 md:w-screen md:h-screen bg-white ${showTypeFilter ? 'opacity-10 z-10 duration-200' : 'opacity-0 -z-10 duration-1000'}`}
        onClick={toggleTypeFilter} />

      <div className={`fixed top-0 ${showTypeFilter ? 'right-0' : '-right-full md:-right-[600px]'} w-full md:w-[600px] h-screen bg-primary z-10 duration-500`}>
      </div>
    </>
  )
}

export default TypeFilter