import React from 'react'
import check from "../assets/check.svg"
import Navbar from '../components/Navbar'
function Sucess() {
  return (
    <div>
      <Navbar/>
    <div className='flex justify-center items-center h-screen w-screen py-16 px-16'> 
         <h1 className='font-bold text-xl py-8 px-8 '>Success Thank you for you purchase! </h1>
         <img className=' w-24 h-24 object-contain animate-bounce' src={check} alt="" />
    </div>
    </div>

  )
}

export default Sucess