import React from 'react'
import header_pic from "../assets/Header-pic.jpg"
import { useNavigate } from 'react-router-dom'


function Header() {
  const Navigate=useNavigate()
  return (
    <div className="grid grid-cols-2 gap-4  py-4 px-4 shadow-2xl shadow-gray-200 ">
      <div className='shadow-2xl flex flex-col justify-center items-center' >
        <h1 className='text-3xl py-8 px-8'>Welcome to Tech Haven: Your Gateway to Ultimate Tech Delights!</h1>

      <p className='py-10 px-8 text-gray-600'>At Tech Haven, we believe in making your tech dreams a reality.
       Explore the latest and greatest selection of smartphones, laptops, and gadgets that will elevate your digital
        experience to new heights. With a seamless and secure shopping experience, we are your
         one-stop destination for all things tech.</p>
         <button className='bg-gray-300 md:w-[30%] rounded-lg py-2 mb-2 ' onClick={()=>{Navigate("/products")}}> Explore </button>
    </div>
    <div className='flex  justify-center py-2 px-4 items-center'  >
      <img className="object-cover h-[300px] w-[70%] rounded-lg " src={header_pic} alt="" />
    </div>
    
    </div>
      
  )
}

export default Header