import React, { useState } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa';
import{HiMiniShoppingCart} from"react-icons/hi2"
import {IoLogoJavascript} from "react-icons/io"
import { useNavigate } from 'react-router-dom';



function Navbar() {
  const Navigate =useNavigate()
  const [nav,setNav]=useState(false)
  const handleClick=()=>{
    setNav(!nav)
  }
  const handleproductsClick=()=>{
    Navigate("/products")
  }
  return (
    <nav className="flex justify-between  items-center  py-1 px-4 h-[70px] ">
      <div className='hidden sm:flex' >
        <IoLogoJavascript className="cursor-pointer"  size={25} onClick={()=>{Navigate("/")}}/>
      </div>
     
        <ul className=' hidden sm:flex gap-16'>
          <li><a  onClick={()=>{Navigate("/")}} className="font-bold cursor-pointer text-gray-500 hover:text-black">Home</a></li>
          <li><a  onClick={()=>{Navigate("/products")}} className="font-bold cursor-pointer text-gray-500 hover:text-black">Products</a></li>
          <li><a className="font-bold cursor-pointer text-gray-500 hover:text-black">about</a></li>
         
        </ul>
      
      <div onClick={handleClick} className='sm:hidden z-20'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <div className=' sm:hidden' >
        <IoLogoJavascript className="cursor-pointer" size={25} onClick={()=>{Navigate("/")}}/>
      </div>
      <div className='  flex gap-4 items-center bg-slate-200 w-16'> <HiMiniShoppingCart size={25}/> <p>(1)</p> </div>

      <ul className={
          !nav
            ? 'hidden'
            : 'absolute top-0 right-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center gap-16 transition-colors z-10'
        }>
          <li><a className="font-bold">Home</a></li>
          <li><a className="font-bold">Products</a></li>
          <li><a className="font-bold">about</a></li>
         
        </ul>


      </nav>
  )
}

export default Navbar