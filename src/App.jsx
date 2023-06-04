import Search from '@components/top-bar/Search'
import TypeFilter from '@components/top-bar/TypeFilter'

const App = () => {
  const handleSearch = searchQuery => {
    console.log(searchQuery)
  }

  return (
    <>
      <main className='w-screen min-h-screen bg-primary'>
        <div className="flex justify-evenly md:justify-end items-center md:items-end md:gap-x-[30px] h-[100px] md:px-[50px]">
          <Search onSearch={handleSearch} />
          <TypeFilter />
        </div>
      </main>
    </>
  )
}

export default App