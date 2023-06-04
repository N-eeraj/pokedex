import Search from '@components/Search'

const App = () => {
  const handleSearch = searchQuery => {
    console.log(searchQuery)
  }

  return (
    <>
      <main className='w-screen min-h-screen bg-primary'>
        <Search onSearch={handleSearch} />
      </main>
    </>
  )
}

export default App