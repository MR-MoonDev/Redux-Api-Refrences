import React from 'react'

const Product = ({image,title}) => {
  return (
    <>
        <div className='flex flex-col gap-3 p-2 w-80 h-50 bg-fuchsia-200  rounded-md'>
        <img src={image} alt="image not found "  />
        <h3 className='bg-gray-100   text-xl p-2 rounded-sm'>{title}</h3>
        <button className='bg-yellow-300 w-max p-2 border-black border-2 rounded-md'>Add to Card</button>

        </div>
        
    </>
  )
}

export default Product