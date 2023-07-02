import App from '@/App'
import Home from '@pages/home'
import PokemonDetails from '@pages/pokemon/details'
import PokemonNotFound from '@pages/pokemon/not-found'
import PageNotFound from '@pages/not-found'

const routes = [
  {
    path: '/',
    element: <App />,
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
      },
      {
        path: '*',
        element: <PageNotFound />
      }
    ]
  }
]

export default routes