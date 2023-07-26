import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Cansel from './pages/Cansel'
import Sucess from './pages/Sucess'
import Contact from "./pages/Contact"


function App() {

  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/products' element={<ProductPage />}/>
      <Route path='/cancel' element={<Cansel />}/>
      <Route path='/success' element={<Sucess />}/>
      <Route path='/contact' element={<Contact />}/>
     
    </Routes>
    
    
    
    </BrowserRouter>

  </>
  )
}

export default App
