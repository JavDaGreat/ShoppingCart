import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Cansel from './pages/Cansel'
import Sucess from './pages/Sucess'
import Contact from "./pages/Contact"
import CheckOut from './pages/CheckOut'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/products',
      element: <ProductPage />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/success',
      element: <Sucess />
    },
    {
      path: '/denied',
      element: <Cansel />
    },
    {
      path: '/checkout',
      element: <CheckOut />
    }
  ]);

  return (
    <>

<RouterProvider router={ router } />
  </>
  )
}

export default App
