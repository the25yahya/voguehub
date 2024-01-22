import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import '../App.css'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineMenu } from "react-icons/md";
import Shop from './Shop.jsx';
import { useStateContext } from '../Contexts/ContextProvider';

const Navbar = () => {

  const {shop,setShop} = useStateContext();
   const OpenShop = () => {
    setShop(true);
   }
   const CloseShop = () => {
    setShop(false);
   }
  return (
    <nav className='fixed w-full z-40 text-white flex justify-between items-center p-4 py-8'>
      <div className='hidden navigation lg:flex cursor-pointer'>
        <div onMouseEnter={OpenShop} 
             onMouseLeave={CloseShop}     
        className='relative flex items-center mr-5 text-sm'>
          <span className='mr-1'>SHOP</span>
          <span><FaChevronDown /></span>
          {shop ? (
            <Shop />
      ) : null}
      {/* Other content goes here */}
        </div>
        <div className='relative flex items-center mr-5 text-sm'>
          <span className='mr-1'>PRODUCTS</span>
          <span><FaChevronDown /></span>
        </div>
        <div className='relative flex items-center mr-5 text-sm'>
          <span className='mr-1'>PAGES</span>
          <span><FaChevronDown /></span>
        </div>
        <div className='relative flex items-center mr-5 text-sm'>
          <span className='mr-1'>BLOG</span>
          <span><FaChevronDown /></span>
        </div>
        <div className='relative flex items-center mr-5 text-sm'>
          <span className='mr-1'>FEATURES</span>
          <span><FaChevronDown /></span>
        </div>
      </div>
      <div className='mr-0 sm:mr-40'>
        <h1 className='title text-3xl cursor-pointer'>VogueHUB</h1>
      </div>
      <div className='flex items-center'>
        <p className='mr-4 text-lg font-semibold cursor-pointer'>LOGIN</p>
        <p className='mr-4 text-2xl font-bold cursor-pointer'><IoIosSearch/></p>
        <p className='mr-4 text-xl cursor-pointer'><FaRegHeart/></p>
        <p className='mr-4 text-xl cursor-pointer'><HiOutlineShoppingBag/></p>
        <p className='text-4xl mr-2 block lg:hidden cursor-pointer'><MdOutlineMenu /></p>
      </div>
    </nav>
  )
}

export default Navbar