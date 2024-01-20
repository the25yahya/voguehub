import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import '../App.css'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className='fixed w-full z-10 text-white flex justify-between items-center p-4 py-8'>
      <div className='hidden navigation lg:flex'>
        <p className='relative'>
          <span>SHOP</span>
          <span><FaChevronDown /></span>
        </p>
        <p className='relative'>
          <span>PRODUCTS</span>
          <span><FaChevronDown /></span>
        </p>
        <p className='relative'>
          <span>PAGES</span>
          <span><FaChevronDown /></span>
        </p>
        <p className='relative'>
          <span>BLOG</span>
          <span><FaChevronDown /></span>
        </p>
        <p className='relative'>
          <span>FEATURES</span>
          <span><FaChevronDown /></span>
        </p>
      </div>
      <div className='mr-40'>
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