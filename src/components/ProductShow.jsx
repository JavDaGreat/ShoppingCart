import React from 'react'

function ProductShow({title,price,image,id}) {
  return (
    <div className='flex flex-col justify-center items-center py-8
     px-4  '>
      <img src={image[0]} alt=""  className='object-contain w-96 h-48' />
      <h1 className='font-bold py-4'>{title}</h1>
      <h2 className='py-2'>{price}$</h2>
      <button className='bg-gray-300 md:w-[30%] rounded-lg px-2 py-2 '>Add to cart</button>
    </div>
  )
}

export default ProductShow