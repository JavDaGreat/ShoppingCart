import React from 'react'
import{BsPlus} from"react-icons/bs"
import {BiMinus} from"react-icons/bi"
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/store'



function ShowCart({title,price,id,image}) {
  const dispatch =useDispatch()
  const products =useSelector(state=>state.products.data)
  const theOne= products.find(product =>product.id === id)

  const handleInc=()=>{
    dispatch(increment(id))
  }
  const handleDec=()=>{
    dispatch(decrement(id))
  }



  return (
    <div className='grid grid-cols-3 gap-4 place-content-center py-4 px-2 h-16 w-[100%] '>
      <p className='font-bold flex justify-center items-center '>{title}</p>
      <p className='font-bold flex justify-center items-center'>{price} $</p> 
      <div className='flex justify-center items-center'> 
        <button onClick={handleInc} ><BsPlus/></button>
        <p className='px-4 font-bold'>{theOne.qty}</p>
        <button onClick={handleDec} ><BiMinus/></button>

      </div>
    
    </div>
  )
}

export default ShowCart