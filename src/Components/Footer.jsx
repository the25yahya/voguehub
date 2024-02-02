import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useStateContext } from '../Contexts/ContextProvider';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const { scrollToTop } = useStateContext();
  return (
    <footer className='mt-50'>
      <div className='flex justify-between clear-start px-8 mb-20 flex-wrap'>
        <div className='mb-10'>
          <h1 className='text-5xl font-semibold font-mono mb-2'>VOGUEHUB</h1>
          <p className='w-400 text-gray-600 text-sm font-semibold'>GET NEWSLETTER FOR UPCOMING PRODUCTS AND BEST OFFERS AND DISCOUNT FOR ALL ITEMS</p>
          <div className='mt-4'>
            <input placeholder='YOUR EMAIL' className='border-2 border-black bg-white w-300 py-2 text-sm rounded-xl px-4 mr-2' />
            <button className='bg-black text-white px-4 py-2 text-sm font-semibold rounded-xl'>SUBMIT</button>
          </div>
        </div>
        <div className='flex flex-col'>
          <h2 className='font-bold text-lg'>PRODUCTS</h2>
          <p className='text-sm font-semibold text-gray-400 my-1'>T-SHIRTS</p>
          <p className='text-sm font-semibold text-gray-400 my-1'>HOODIES</p>
          <p className='text-sm font-semibold text-gray-400 my-1'>JACKETS</p>
          <p className='text-sm font-semibold text-gray-400 my-1'>DRESSES</p>
          <p className='text-sm font-semibold text-gray-400 my-1'>JEANS</p>
          <p className='text-sm font-semibold text-gray-400 my-1'>SNEAKERS</p>
        </div>
        <div className='flex flex-col'>
          <h2 className='font-bold text-lg'>CATEGORIES</h2>
          <p className='text-sm font-semibold text-gray-400 my-1'>MEN</p>
          <p className='text-sm font-semibold text-gray-400 my-1'>WOMEN</p>
          <p className='text-sm font-semibold text-gray-400 my-1'>KIDS</p>
          <p className='text-sm font-semibold text-gray-400 my-1'>COLLECTIONS</p>
          <p className='text-sm font-semibold text-gray-400 my-1'>NEW ARRIVALS</p>
        </div>
        <div className='flex flex-col'>
          <h2 className='font-bold text-lg'>HELP</h2>
          <p className='text-sm font-semibold text-gray-400 my-1'>CUSTOMER SERVICE</p>
          <p className='text-sm font-semibold text-gray-400 my-1'>MY ACCOUNT</p>
          <p className='text-sm font-semibold text-gray-400 my-1'>CONTACT</p>
          <p className='text-sm font-semibold text-gray-400 my-1'>COOKIE NOTICE</p>
        </div>
      </div>
      <div className='flex items-center bg-black justify-between text-white px-8 py-8 text-sm'>
        <p className='font-semibold'>&copy; 2024 ALL RIGHTS RESERVED</p>
        <div className='flex justify-center'>
          <p onClick={scrollToTop} className='text-sm font-bold mr-5 cursor-pointer'>VOGUEHUB</p>
          <span className='text-lg mx-4'><FaFacebook/></span>
          <span className='text-lg mx-4'><FaInstagram/></span>
          <span className='text-lg mx-4'><FaXTwitter/></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer