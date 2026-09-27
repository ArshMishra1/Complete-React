import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Product from './Pages/Product.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx' 
import Fullpage from './Pages/Fullpage.jsx'
 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Product",
        element: <Product />,
      },
      {
        path: "/Product/:id",
        element: <Fullpage />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/About",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
