import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'

const myrouter = createBrowserRouter([{
  path: '/',
  element: <Layout />,

  children : [
    {
      path: "",
      element: <Home />
    },


    {
      path: "about",
      element: <About />
    },
    {
      path: "contact",
      element: <Contact />
    
    }
  ]


}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myrouter} />
  </React.StrictMode>,
)
