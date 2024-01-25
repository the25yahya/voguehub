import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useStateContext } from '../Contexts/ContextProvider';

const Sidebar = () => {
    const {setSidebar} = useStateContext();
    const CloseSidebar = () => {
        setSidebar(false);
    }
  return (
    <div className='fixed bg-white text-black right-0 top-0 p-5 h-500 w-300 z-50'>
        <span onClick={CloseSidebar} className='absolute top-2 left-4 text-lg'><IoMdClose/></span>
        <div>
          <p>Shop</p>
          <p>Products</p>
          <p>Pages</p>
          <p>Blog</p>
        </div>
    </div>
  )
}

export default Sidebar