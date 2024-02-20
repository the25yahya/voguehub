import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'

const Checkout = () => {
    const {state} = useStateContext();
  return (
    <div className='px-4 w-350 bg-white py-8 ml-10'>
        <p className='text-sm font-semibold mb-1'>Log in to use your member offers!</p>
        <button className='w-full border border-black py-2 text-sm font-semibold mb-5'>Log in</button>
        <div className='flex justify-between items-center mb-1'>
            <p className='text-sm font-semibold text-gray-500'>Order Value</p>
            <p className='font-semibold'>${state.subtotal}</p>
        </div>
        <div className='flex justify-between items-center mb-1'>
            <p className='text-sm font-semibold text-gray-500'>Discount</p>
            <p className='font-semibold'>_</p>
        </div>
        <div className='flex justify-between items-center border-b border-black pb-4 mb-4'>
            <p className='text-sm font-semibold text-gray-500'>shipping</p>
            <p className='font-semibold'>$5.99</p>
        </div>
        <div className='flex items-center justify-between'>
            <p className='font-bold'>Total</p>
            <p className='font-bold'>${state.subtotal + 5.99}</p>
        </div>
        <button className='bg-black text-white text-sm w-full my-4 py-3 font-bold hover:bg-transparent hover:text-black transition'>Continue to Chekout</button>
        <p className='text-sm font-semibold'>We accept</p>
        <div className='flex items-center flex-wrap my-2'>
            <img className='w-60 mx-2' src='https://logohistory.net/wp-content/uploads/2023/08/PayPal-Logo.png' />
            <img className='w-60 mx-2' src='https://www.investopedia.com/thmb/bsuvDPp6qRajunDxfjy4UHcSfwk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Discover-logo-28a70026a79d4023adafb0f5e2e773cf.jpg' />
            <img className='w-40 mx-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png' />
            <img className='w-60 mx-2' src='https://www.visa.com.ua/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg' />
            <img className='w-60 mx-2' src='https://developer.apple.com/news/images/og/apple-pay-og-twitter.jpg' />
        </div>
        <p className='text-sm font-semibold text-gray-500'>The estimated tax will be confirmed once you added your shipping address in checkout.
30-day returns. Read more about our return and refund policy.</p>
    </div>
  )
}

export default Checkout