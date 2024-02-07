import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useStateContext } from '../Contexts/ContextProvider';

const NavCart = () => {
    const {ToggleNavCart,cartItems} = useStateContext();
    if (cartItems.length === 0){
      return (
        <div className='w-320 h-full fixed bg-white top-0 right-0 text-black p-6 shadow-xl slide-right z-50'>
            <h1 className='text-2xl font-semibold mb-8'>Shopping Cart</h1>
            <p className='text-sm'>No products in the cart</p>
            <div onClick={ToggleNavCart} className='absolute right-2 top-5 text-2xl'><IoMdClose /></div>
        </div>
      )
    } else if (cartItems.length > 0){
      return (
        <div>working</div>
      )
    }
}

export default NavCart