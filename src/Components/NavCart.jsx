import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useStateContext } from '../Contexts/ContextProvider';
import CartProducts from './CartProducts';

const NavCart = () => {
    const {ToggleNavCart,state} = useStateContext();
    if (state.cart.length === 0){
      return (
        <div className='w-320 h-full fixed bg-white top-0 right-0 text-black p-6 shadow-xl slide-right z-50'>
            <h1 className='text-2xl font-semibold mb-8'>Shopping Cart</h1>
            <p className='text-sm'>No products in the cart</p>
            <div onClick={ToggleNavCart} className='absolute right-2 top-5 text-2xl'><IoMdClose /></div>
        </div>
      )
    } else if (state.cart.length > 0){
      return (
        <div className='w-320 h-full fixed bg-white top-0 right-0 text-black p-6 shadow-xl slide-right z-50 overflow-y-scroll flex flex-col justify-between'>
            <div>
             <h1 className='text-2xl font-semibold mb-8'>Shopping Cart</h1>
             <div onClick={ToggleNavCart} className='absolute right-2 top-5 text-2xl'><IoMdClose /></div>
            <div><CartProducts /></div>
            </div>
            <div className='py-5 border-t'>
              <div className='flex items-center justify-between'>
                <p>Subtotal :</p>
                <p>{state.subtotal}</p>
              </div>
              <button className='bg-black text-white w-full px-4 py-2 mt-4 text-sm font-semibold transition hover:bg-transparent hover:text-black'>VIEW CART</button>
            </div>
        </div>
      )
    }
}

export default NavCart