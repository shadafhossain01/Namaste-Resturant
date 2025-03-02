import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from "./components/About.jsx"
import Menu from "./components/Menu.jsx"
import Contact from "./components/Contact.jsx"
import Error from './components/Error.jsx'
import Navbar from './components/Navbar.jsx'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import ProductDetail from './components/ProductDetail.jsx'

function Layout(){
return(
  <>
<Navbar/>
<Outlet/>
</>
)
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<App/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/menu",
        element:<Menu/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/product/:productId",
        element:<ProductDetail/>
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
