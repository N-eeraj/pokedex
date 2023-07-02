import { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'

export const AppContext = createContext()

const App = () => {
  const [pokemonData, setPokemonData] = useState({})
  const [typeList, setTypeList] = useState({})

  return (
    <AppContext.Provider value={{pokemonData, typeList, setPokemonData, setTypeList}}>
      <Outlet />
    </AppContext.Provider>
  )
}

export default App