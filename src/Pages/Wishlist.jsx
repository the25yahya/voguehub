import React from 'react'
import Navbar from '../Components/Navbar'
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Wishlist = () => {
  return (
    <div className='flex flex-col'>
      <Navbar 
        navbarClasses='fixed w-full z-40 text-white flex justify-between items-center px-8 py-5 border-transparent border-b transition bg-black shadow-2xl'
      />
      <div className='mt-32'>
        <p className='flex items-center ml-5'>
         <Link to='/'><span className='flex items-center cursor-pointer'>Home<FaAngleRight/></span></Link>
         <span>Wishlist</span>
        </p>
        <p className='border-t my-10 ml-20 w-500 pt-2 text-sm'>There are no products on the wishlist!</p>
      </div>
    </div>
  )
}

export default Wishlist