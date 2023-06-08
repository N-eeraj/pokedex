import Search from '@components/top-bar/Search'
import TypeFilter from '@components/top-bar/TypeFilter'

import background from '@images/background.png'

const App = () => {
  const handleSearch = searchQuery => {
    console.log(searchQuery)
  }

  return (
    <>
      <img
        src={background}
        alt="background"
        className="fixed top-0 left-0 w-screen h-screen object-cover" />
      <main
        className="absolute w-screen min-h-screen">
        <div className="flex justify-evenly md:justify-end items-center md:items-end md:gap-x-[30px] h-[100px] md:px-[50px]">
          <Search onSearch={handleSearch} />
          <TypeFilter />
        </div>
      </main>
    </>
  )
}

export default App