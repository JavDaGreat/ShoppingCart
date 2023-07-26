import React, { useState } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa';
import{HiMiniShoppingCart} from"react-icons/hi2"
import {IoLogoJavascript} from "react-icons/io"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Navbar({setOpen,open}) {
  const products =useSelector(state=> state.products.data)
  


  const Navigate =useNavigate()
  const [nav,setNav]=useState(false)
  const handleNav=()=>{
    setNav(!nav)
  }
  const handleDropDown= ()=>setOpen(!open)
    





 
  
  return (
    <nav className="flex justify-between  items-center  py-1 px-4 h-[70px] shadow-2xl ">
      <div className='hidden sm:flex' >
        <IoLogoJavascript className="cursor-pointer"  size={25} onClick={()=>{Navigate("/")}}/>
      </div>
     
        <ul className=' hidden sm:flex gap-16'>
          <li><a  onClick={()=>{Navigate("/")}} className="font-bold cursor-pointer text-gray-500 hover:text-black">Home</a></li>
          <li><a  onClick={()=>{Navigate("/products")}} className="font-bold cursor-pointer text-gray-500 hover:text-black">Products</a></li>
          <li><a className="font-bold cursor-pointer text-gray-500 hover:text-black">about</a></li>
         
        </ul>
      
      <div onClick={handleNav} className='sm:hidden z-20 '>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <div className=' sm:hidden' >
        <IoLogoJavascript className="cursor-pointer" size={25} onClick={()=>{Navigate("/")}}/>
      </div>
      <div className='  flex gap-4 items-center shadow-lg  w-24 justify-center h-8 ' onClick={handleDropDown}> 
      <HiMiniShoppingCart size={25}/> <p className='font-bold text-red-700'>{products.length}</p>
       
      
      
       </div>

      <ul className={
          !nav
            ? 'hidden'
            : 'fixed top-0 right-0 w-full h-screen bg-white/95 flex flex-col justify-center items-center gap-16 transition-colors z-10'
        }>
          <li><a onClick={()=>{Navigate("/")}} className="font-bold text-gray-500 hover:text-black hover:underline hover:underline-offset-4 hover:decoration-2  cursor-pointer">Home</a></li>
          <li><a onClick={()=>{Navigate("/products")}} className="font-bold text-gray-500 hover:text-black hover:underline hover:underline-offset-4 hover:decoration-2  cursor-pointer">Products</a></li>
          <li><a className="font-bold text-gray-500 hover:text-black hover:underline hover:underline-offset-4 hover:decoration-2  cursor-pointer">about</a></li>
         
        </ul>

       

      
          
        


      </nav>
  )
}

export default Navbar