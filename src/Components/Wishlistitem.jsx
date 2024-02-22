import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";


const Wishlistitem = (props) => {
  return (
    <div className='flex items-center justify-around my-1 w-full relative'>
        <div className='flex items-center'>
         <div onClick={props.onClick} className='cursor-pointer text-sm'><TiDeleteOutline/></div>
        <img className='w-60 mx-5' src={props.img1} />
        <p className='text-sm font-semibold w-200 mr-5'>{props.name}</p></div>
        <div className='text-sm'>
            <p className='flex items-center'>
                <span>Price :</span>
                <span className='ml-1'>{props.price}$</span>
            </p>
        </div>
        <div className='text-sm'>
            <p className='flex items-center'>
                <p className=''>in Stock</p>
            </p>
        </div>
        <button className='bg-black px-6 py-2 text-white text-sm w-150'>Add To Cart</button>
    </div>
  )
}

export default Wishlistitem