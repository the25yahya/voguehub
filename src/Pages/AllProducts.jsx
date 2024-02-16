import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'
import Navbar from '../Components/Navbar';
import { LuSettings2 } from "react-icons/lu";
import Dropdown from '../Components/Dropdown';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const {AllProducts} = useStateContext();

  return (
    <div className='flex flex-col items-center'>
      <Navbar 
        navbarClasses='fixed w-full z-40 text-white flex justify-between items-center px-8 py-5 border-transparent border-b transition bg-black shadow-2xl'
      />
      <div className='mt-24 flex flex-col items-start relative'>
        <p className='flex items-center ml-5'>
         <Link to='/'><span className='flex items-center cursor-pointer'>Home<FaAngleRight/></span></Link>
         <span>All Products</span>
        </p>
        <div className='flex justify-between w-full px-32 mt-12'>
         <div className='flex items-center'>
          <p className='mr-1'><LuSettings2 /></p>
          <p>FILTERS</p>
         </div>
         <div>
          <Dropdown />
         </div>
        </div>
        <div className='flex pl-28 flex-wrap w-full'>{AllProducts}</div>
      </div>
    </div>
  )
}

export default AllProducts