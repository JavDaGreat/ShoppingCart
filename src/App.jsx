import { lazy, useState,Suspense } from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

function App() {

  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/products' element={<ProductPage />}/>
     
    </Routes>
    
    
    
    </BrowserRouter>

  </>
  )
}

export default App
