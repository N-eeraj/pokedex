import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import './index.css'

import background from '@images/background.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <img
      src={background}
      alt="background"
      className="fixed top-0 left-0 w-screen h-screen object-cover -z-10" />

    <RouterProvider
      router={router} />
  </>
)