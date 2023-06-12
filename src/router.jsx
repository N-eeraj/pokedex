import { createBrowserRouter } from 'react-router-dom'

import Home from '@pages/home'
import PokemonDetails from '@pages/pokemon/details'
import PokemonNotFound from '@pages/pokemon/not-found'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'pokemon/',
        children: [
          {
            path: 'not-found',
            element: <PokemonNotFound />
          },
          {
            path: ':pokemon',
            element: <PokemonDetails />
          }
        ]
      }
    ]
  }
])

export default router