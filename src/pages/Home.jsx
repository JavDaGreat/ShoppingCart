import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import SlideShow from '../components/SlideShow'
import Header from '../components/Header'
import Cart from '../components/cart'


function Home() {
  const [open ,setOpen] =useState(false)

  return (
    <>
    <Navbar setOpen={setOpen} open={open} />
    <Cart setOpen={setOpen} open={open} />
    <Header />
    <SlideShow />
    </>
  )
}

export default Home