import { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'

export const AppContext = createContext()

const App = () => {
  const [pokemonData, setPokemonData] = useState({})

  return (
    <AppContext.Provider value={{pokemonData, setPokemonData}}>
      <Outlet />
    </AppContext.Provider>
  )
}

export default App