import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";


const Wishlistitem = (props) => {
  return (
    <div className='flex items-center justify-start my-1 relative'>
        <div onClick={props.onClick} className='absolute right-0 top-1 cursor-pointer text-sm'><TiDeleteOutline/></div>
        <img className='w-60' src={props.img1} />
     <div className='flex flex-col items-start ml-4'>
        <p className='text-sm font-semibold w-150 mr-5'>{props.name}</p>
        <div className='text-sm'>
            <p className='flex items-center'>
                <span>Price :</span>
                <span className='ml-1'>{props.price}$</span>
            </p>
        </div>
        <div className='text-sm'>
            <p className='flex items-center'>
                <span className='mr-1'>{props.type}'s</span> 
                <span> Clothes</span>
            </p>
        </div>
     </div>
    </div>
  )
}

export default Wishlistitem