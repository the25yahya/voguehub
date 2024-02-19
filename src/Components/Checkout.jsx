import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'

const Checkout = () => {
    const {state} = useStateContext();
  return (
    <div className='px-4'>
        <p>Log in to use your member offers!</p>
        <button className='border-b'>Log in</button>
        <div className='flex justify-between items-center'>
            <p>Order Value</p>
            <p>${state.subtotal}</p>
        </div>
        <div className='flex justify-between items-center'>
            <p>Discount</p>
            <p>_</p>
        </div>
        <div className='flex justify-between items-center border-b border-black pb-4'>
            <p>shipping</p>
            <p>$5.99</p>
        </div>
        <div className='flex items-center justify-between'>
            <p>Total</p>
            <p>${state.subtotal + 5.99}</p>
        </div>
        <button className='bg-black text-white text-sm'>Continue to Chekout</button>
        <p>We accept</p>
        <div className='flex items-center flex-wrap'>
            <img className='w-50' src='https://logohistory.net/wp-content/uploads/2023/08/PayPal-Logo.png' />
            <img className='w-50' src='https://logohistory.net/wp-content/uploads/2023/08/PayPal-Logo.png' />
            <img className='w-50' src='https://logohistory.net/wp-content/uploads/2023/08/PayPal-Logo.png' />
            <img className='w-50' src='https://logohistory.net/wp-content/uploads/2023/08/PayPal-Logo.png' />
            <img className='w-50' src='https://logohistory.net/wp-content/uploads/2023/08/PayPal-Logo.png' />
            <img className='w-50' src='https://logohistory.net/wp-content/uploads/2023/08/PayPal-Logo.png' />
        </div>
        <p>The estimated tax will be confirmed once you added your shipping address in checkout.
30-day returns. Read more about our return and refund policy.</p>
    </div>
  )
}

export default Checkout