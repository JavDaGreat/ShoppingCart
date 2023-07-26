import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/productsSlice'


function ProductShow({title,price,image,id}) {
  const dispatch=useDispatch()
  function handleAdd(){
    dispatch(addProduct({title,price,id,qty:1,image:image[0]}))
  }
  return (
    <div className='flex flex-col justify-center items-center py-8 px-4 shadow-2xl shadow-gray-200 '>
      <img src={image[0]} alt=""  className='object-contain w-96 h-48' />
      <h1 className='font-bold py-4'>{title}</h1>
      <h2 className='py-2'>{price}$</h2>
      <button onClick={handleAdd} className='bg-gray-300 md:w-[30%] rounded-lg px-2 py-2 hover:-translate-y-[2px]  focus: shadow-lg transform active:scale-90 transition-transform '>Add to cart</button>
    </div>
  )
}

export default ProductShow