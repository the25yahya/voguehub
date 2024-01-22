import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import '../App.css'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineMenu } from "react-icons/md";
import Shop from './Shop.jsx';
import { useStateContext } from '../Contexts/ContextProvider';
import NavCart from './NavCart';

const Navbar = () => {

  const {shop,setShop,navCart,ToggleNavCart} = useStateContext();
   const OpenShop = () => {
    setShop(true);
   }

  return (
    <nav className='fixed w-full z-40 text-white flex justify-between items-center p-4 py-8 border-transparent'>
      <div className='hidden navigation lg:flex cursor-pointer'>
        <div onMouseEnter={OpenShop}      
        className='relative flex items-center mr-5 text-sm'>
          <span className='mr-1 font-semibold'>SHOP</span>
          <span><FaChevronDown /></span>
          {shop ? (
            <Shop />
      ) : null}
      {/* Other content goes here */}
        </div>
        <div className='relative flex items-center mr-5 text-sm'>
          <span className='mr-1 font-semibold'>PRODUCTS</span>
          <span><FaChevronDown /></span>
        </div>
        <div className='relative flex items-center mr-5 text-sm'>
          <span className='mr-1 font-semibold'>PAGES</span>
          <span><FaChevronDown /></span>
        </div>
        <div className='relative flex items-center mr-5 text-sm'>
          <span className='mr-1 font-semibold'>BLOG</span>
          <span><FaChevronDown /></span>
        </div>
        <div className='relative flex items-center mr-5 text-sm'>
          <span className='mr-1 font-semibold'>FEATURES</span>
          <span><FaChevronDown /></span>
        </div>
      </div>
      <div className='mr-0 sm:mr-48'>
        <h1 className='title text-3xl cursor-pointer'>VogueHUB</h1>
      </div>
      <div className='flex items-center'>
        <p className='mr-4 text-lg font-semibold cursor-pointer'>LOGIN</p>
        <div className='mr-4 text-2xl font-bold cursor-pointer'><IoIosSearch/></div>
        <div className='mr-4 text-xl cursor-pointer'><FaRegHeart/></div>
        <div onClick={ToggleNavCart} className='mr-4 text-xl cursor-pointer'>
        <HiOutlineShoppingBag/>
        {navCart ? (
            <NavCart />
      ) : null}
        </div>
        <div className='text-4xl mr-2 block lg:hidden cursor-pointer'><MdOutlineMenu /></div>
      </div>
    </nav>
  )
}

export default Navbar