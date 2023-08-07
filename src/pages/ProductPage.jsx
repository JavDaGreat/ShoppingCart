import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'


function ProductPage() {
  const [open ,setOpen] =useState(false)
  return (
    <div>
      <Navbar setOpen={setOpen} open={open}  />
      <Cart open={open} setOpen={setOpen} />
    

      <ProductList />
    </div>
  )
}

export default ProductPage