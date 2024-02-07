import React from 'react'

const Product2 = (props) => {
  return (
    <div className='mt-5 mx-4'>
         <img className='w-200' src={props.img1} />
         <div className='flex flex-col items-start mt-3'>
            <h2 className='font-semibold w-200'>{props.name}</h2>
            <p className='text-gray-500 text-sm font-semibold'>{props.price}</p>
         </div>
    </div>
  )
}

export default Product2