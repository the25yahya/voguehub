import React from 'react'
import Navbar from '../Components/Navbar'
import { useStateContext } from '../Contexts/ContextProvider'

const Kids = () => {
   const { KidsProducts } = useStateContext();
  return (
    <div className='flex flex-col items-center'>
      <Navbar 
        navbarClasses='fixed w-full z-40 text-white flex justify-between items-center px-8 py-5 border-transparent border-b transition bg-black'
      />
      <div className='flex pl-28 flex-wrap w-full mt-50'>{KidsProducts}</div>
    </div>
  )
}

export default Kids