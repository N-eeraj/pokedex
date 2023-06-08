import { useState } from 'react'

import Type from '@components/Type'

import typeDetails from '@/typeDetails'

import FilterIcon from '@icons/UI/filter.svg'
import CloseIcon from '@icons/UI/clear.svg'

const typeNames = Object.keys(typeDetails)

const TypeFilter = () => {
  const [showTypeFilter, setshowTypeFilter] = useState(false)
  const [selectedTypes, setSelectedTypes] = useState([])

  const toggleTypeFilter = () => setshowTypeFilter(prevValue => !prevValue)

  const handleToggle = type => {
    if (selectedTypes.includes(type))
      setSelectedTypes(prevValue => prevValue.filter(selectedType => selectedType !== type))
    else
      setSelectedTypes(prevValue => [...prevValue, type])
  }

  const clearSelectedTypes = () => {
    setSelectedTypes([])
  }

  const applyTypeFilter = () => {
    console.log(selectedTypes)
  }

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
        className={`fixed top-0 left-0 md:w-screen md:h-screen  backdrop-blur-sm ${showTypeFilter ? 'bg-white/10 z-10 duration-200' : 'bg-transparent -z-10 duration-1000'}`}
        onClick={toggleTypeFilter} />

      <div className={`fixed top-0 ${showTypeFilter ? 'right-0' : '-right-full md:-right-[600px]'} w-full md:w-[600px] h-screen bg-primary z-10 duration-500`}>
        <div className="flex md:justify-between items-end h-[50px] px-[25px]">
          <div className="flex justify-center gap-x-[15px]">
            <button onClick={toggleTypeFilter}>
              <img
                src={CloseIcon}
                alt="Close" />
              </button>
            <span className="text-grey">
              Select Types
            </span>
          </div>
          <div className="absolute md:relative left-0 bottom-0 flex md:gap-x-[25px] w-full md:w-auto">
            <button
              className="w-1/2 md:w-auto bg-primary text-white"
              onClick={clearSelectedTypes}>
              Clear
            </button>
            <button
              className="w-1/2 md:w-[125px] h-8 bg-secondary text-white md:rounded-3xl"
              onClick={applyTypeFilter}>
              Apply
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-[30px] max-h-[calc(100%-112px)] mt-[30px] pb-[30px] overflow-y-auto">
          {
            typeNames.map((type, index) => (
              <Type
                type={type}
                isSelected={selectedTypes.includes(type)}
                onToggle={() => handleToggle(type)}
                key={index}
                className="m-auto" />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default TypeFilter