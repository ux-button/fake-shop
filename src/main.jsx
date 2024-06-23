import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Shop } from './Shop'
import { Item } from './Item'
import { Navigation } from './components/Navigation'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      { index: true, element: <Shop /> },
      { path: 'item/:name', element: <Item /> }
    ]
  },
  {
    path: '/item/:name',
    element: <Item />,
  },
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
