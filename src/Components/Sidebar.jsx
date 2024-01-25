import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useStateContext } from '../Contexts/ContextProvider';
import { FaChevronDown,FaAngleRight } from "react-icons/fa";

const Sidebar = () => {
    const {ToggleSidebar} = useStateContext();
  return (
    <div className='fixed bg-white text-black right-0 top-24 p-5 h-500 w-full z-50 slide-right'>
        <span onClick={ToggleSidebar} className='absolute top-4 right-4 text-xl'><IoMdClose/></span>
        <div className='mt-10'>
          <div className='flex items-center w-full justify-between mb-2'>
            <p className='text-lg'>Shop</p>
            <span className='text-base'><FaChevronDown/></span>
          </div>
          <div className='flex items-center w-full justify-between mb-2'>
           <p className='text-lg'>Products</p>
           <span className='text-base'><FaChevronDown/></span>
          </div>
          <div className='flex items-center w-full justify-between mb-2'>
           <p className='text-lg'>Pages</p>
           <span className='text-base'><FaChevronDown/></span>
          </div>
          <div className='flex items-center w-full justify-between'>
           <p className='text-lg'>Blog</p>
           <span className='text-base rotate-90'><FaChevronDown/></span>
          </div>
        </div>
    </div>
  )
}

export default Sidebar