import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useStateContext } from '../Contexts/ContextProvider';
import { Link } from 'react-router-dom';


const NavWishlist = () => {
    const {navWishlist,setNavWishlist,wishlist} = useStateContext();
    const CloseWishlist = () =>{
        setNavWishlist(false);
    }
  return (
    <div  className={`absolute top-100 z-50 w-full ${navWishlist ? 'grid place-items-center' : 'hidden'}`}>
        <div className='flex flex-col items-center shadow-xl appear-from-top'>
          <div className='bg-black text-white flex items-center justify-between w-full p-2 px-5'>
            <p className='text-sm font-semibold'>Wishlist</p>
            <p className='cursor-pointer' onClick={CloseWishlist}><IoMdClose /></p>
          </div>
          <div className='flex flex-col justify-between bg-white p-5'>
            <p className='mb-10 ml-8 text-sm'>There are no products on the Wishlist!</p>
            <div className='w-full flex items-center justify-between'>
                <Link  onClick={CloseWishlist} to='/wishlist'><p className='underline text-sm mr-10 cursor-pointer'>OPEN WISHLIST PAGE</p></Link>
                <p  onClick={CloseWishlist} className='underline text-sm cursor-pointer'>CONTINUE SHOPPING</p>
            </div>
          </div>
       </div>
    </div>
  )
}

export default NavWishlist