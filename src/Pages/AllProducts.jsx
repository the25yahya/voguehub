import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'
import Navbar from '../Components/Navbar';
import { FaAngleDown } from "react-icons/fa";

const AllProducts = () => {
  const {AllProducts} = useStateContext();

  return (
    <div className='flex flex-col items-center'>
      <Navbar 
        navbarClasses='fixed w-full z-40 text-white flex justify-between items-center px-8 py-5 border-transparent border-b transition bg-black shadow-2xl'
      />
      <div className='mt-50 flex flex-col items-start'>
        <div className='flex ml-32 my-5'>
          <div className='flex items-center mx-2'>
            <p className='mr-5'>SORT BY</p>
            <p><FaAngleDown /></p>
          </div>
          <div className='flex items-center mx-2'>
            <p className='mr-5'>SIZE</p>
            <p><FaAngleDown /></p>
          </div>
          <div className='flex items-center mx-2'>
            <p className='mr-5'>COLOR</p>
            <p><FaAngleDown /></p>
          </div>
          <div className='flex items-center mx-2'>
            <p className='mr-5'>PATTERN</p>
            <p><FaAngleDown /></p>
          </div>
          <div className='flex items-center mx-2'>
            <p className='mr-5'>PRODUCT TYPE</p>
            <p><FaAngleDown /></p>
          </div>
        </div>
        <div className='flex pl-28 flex-wrap w-full'>{AllProducts}</div>
      </div>
    </div>
  )
}

export default AllProducts