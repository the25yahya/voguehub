import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'
import Navbar from '../Components/Navbar';

const AllProducts = () => {
  const {AllProducts} = useStateContext();

  return (
    <div className='flex flex-col items-center'>
      <Navbar 
        navbarClasses='fixed w-full z-40 text-white flex justify-between items-center px-8 py-5 border-transparent border-b transition bg-black shadow-2xl'
      />
      <div className='flex pl-28 flex-wrap w-full mt-50'>{AllProducts}</div>
    </div>
  )
}

export default AllProducts