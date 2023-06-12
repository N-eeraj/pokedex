import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)