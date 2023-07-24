import React, { useState } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa';
import{HiMiniShoppingCart} from"react-icons/hi2"
import {IoLogoJavascript} from "react-icons/io"



function Navbar() {
  const [nav,setNav]=useState(false)
  const handleClick=()=>{
    setNav(!nav)
  }
  return (
    <nav className="flex justify-between  items-center  py-1 px-4 h-[70px] ">
      <div className='hidden sm:flex' >
        <IoLogoJavascript size={25}/>
      </div>
     
        <ul className=' hidden sm:flex gap-16'>
          <li><a href="">Home</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">about</a></li>
         
        </ul>
      
      <div onClick={handleClick} className='sm:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <div className=' sm:hidden' >
        <IoLogoJavascript size={25}/>
      </div>
      <div className='  flex gap-4 items-center bg-slate-200 w-16'> <HiMiniShoppingCart size={25}/> <p>(1)</p> </div>

      <ul className={
          !nav
            ? 'hidden'
            : 'absolute top-0 right-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center gap-16 transition-colors'
        }>
          <li><a href="">Home</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">about</a></li>
         
        </ul>


      </nav>
  )
}

export default Navbar