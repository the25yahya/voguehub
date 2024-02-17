import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider';
import { FiAlertCircle } from "react-icons/fi";
import Navbar from '../Components/Navbar';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Cart = () => {
  const {state} = useStateContext();
  if (state.cart.length === 0){
    return (
      <div className='flex flex-col items-center'>
        <Navbar 
         navbarClasses='fixed w-full z-40 text-white flex justify-between items-center px-8 py-5 border-transparent border-b transition bg-black'
        />
        <div className='mt-24 w-full px-20'>
        <p className='flex items-center'>
         <span className='flex items-center'>Home<FaAngleRight/></span>
         <span>Cart</span>
        </p>
        <div className='flex items-center border border-black bg-gray-100 px-5 py-2 mb-5 ml-20 mt-12'>
         <div className='mr-2'><FiAlertCircle /></div>
         <p>Your Cart is currently empty</p>
        </div>
        <Link to='/'><button className='bg-black w-200 text-white px-4 py-3 text-sm ml-20 transition hover:bg-transparent hover:text-black'>RETURN TO SHOP</button></Link>
        </div>
      </div>
    )
  } else if (state.cart.length > 0){
    return (
      <div>working</div>
    )
  }
}

export default Cart