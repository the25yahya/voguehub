import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";

const Cartitem2 = (props) => {
  return (
    <div className='flex start my-4'>
        <img className='w-100 mx-4' src={props.img1}/>
        <div>
            <div className='flex items-start justify-between'>
                <div className='mr-20'>
                 <p className='w-300 font-semibold'>{props.name}</p>
                 <p className='text-gray-500 font-semibold'>{props.price}$</p>
                </div>
                <div className='mt-2' onClick={props.onClick}><FaRegTrashCan /></div>
            </div>
            <div>
             <div><p>Color :</p><p>{props.color}</p></div>
             <div><p>Size :</p><p>{props.size}</p></div>
            </div>
            <div><p>{props.type}'s Clothes</p></div>
        </div>
    </div>
  )
}

export default Cartitem2