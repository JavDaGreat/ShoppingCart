import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'



function CheckOut() {
  const {state}=useLocation()
  const {products}=state
  const Navigate=useNavigate()
  const content = products.map((product)=>{
   return (<div className='w-full  grid md:grid-cols-3 sm:grid-cols-2 gap-2 py-4 px-4 place-items-center  border-gray-200 border-2 ' key={product.id}>
      <p> Product : &nbsp;{product.title}</p>
      <p> qty: &nbsp;{product.qty}</p>
      <p>Price: &nbsp; {product.price}$</p>
    </div>)
  })
 
  return (
  < >
  
        <Navbar/>

    <div className='h-screen w-full flex justify-between items-center py-4 px-4'>
        <div className=' w-[40%] '>
        <form className=' flex flex-col items-center justify-between'>
          <label htmlFor="name">Cardholder Name</label>
          <input type="text" id='name' className='block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-white-400 border-black border-2 '/>
          <label htmlFor="creditNr"> Card Number</label>
          <input type="number" className='block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-white-400 border-black border-2'  />
          <label htmlFor="ccv">CCV</label>
          <input type="number" maxLength={3} className='block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-white-400 border-black border-2' />
          <label htmlFor="expiryDate">Expiry date</label>
          <input type="month"  id="expiryDate"  className='block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-white-400 border-black border-2'/>
          <button className='bg-yellow-500 rounded-lg hover:bg-yellow-600 py-2 hover:-translate-y-[2px]  px-4 font-bold focus: shadow-lg transform active:scale-90 transition-transform mt-3' onClick={()=>{Navigate("/success")}}>Make Payment</button>


        </form>
      </div>
      <div className='w-[50%] py-4 px-4 '>
         <h1 className='text-center font-bold'>Current Cart</h1>
        {content}
        <p className=' text-red-500 text-center'> Total :{state.total}$</p>

      </div>
    
      </div>
      </>
  )
}

export default CheckOut