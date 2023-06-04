import Search from '@components/Search'

const App = () => {
  const handleSearch = searchQuery => {
    console.log(searchQuery)
  }

  return (
    <>
      <main className='w-screen min-h-screen bg-primary'>
        <div className="flex justify-evenly md:justify-end items-center md:items-end h-[100px] md:px-[50px]">
          <Search onSearch={handleSearch} />
        </div>
      </main>
    </>
  )
}

export default App