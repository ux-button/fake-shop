import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Shop } from './Shop'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shop />,
  },
  // {
  //   path: '/:name',
  //   element: <Item />,
  // },
  // {
  //   path: '/checkout',
  //   element: <Checkout />,
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
