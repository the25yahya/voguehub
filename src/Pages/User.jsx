import React from 'react';
import Navbar from '../Components/Navbar'
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className='flex flex-col items-center relative'>
     <Navbar 
        navbarClasses='fixed w-full z-40 text-white flex justify-between items-center px-8 py-5 border-transparent border-b transition bg-black shadow-2xl'
     />
     <div className='mt-28'>
        <p className='flex items-center ml-5 absolute left-0'>
         <Link to='/'><span className='flex items-center cursor-pointer'>Home<FaAngleRight/></span></Link>
         <span className='flex items-center'>Shop<FaAngleRight/></span>
         <span>My Account</span>
        </p>
        <div className='p-10 mt-5'>
         <h2 className='text-3xl mb-5'>Login</h2>
         <div className='flex flex-col mb-4'>
          <label className='text-sm font-semibold' htmlFor="myInput">Username or email adress</label>
          <input className='border-2 border-black w-500 py-2' type="text" name="myInput"></input>
         </div>
         <div className='flex flex-col'>
          <label className='text-sm font-semibold' htmlFor="myInput2">Password</label>
          <input className='border-2 border-black w-500 py-2' type="text" name="myInput2"></input>
         </div>
         <div className='flex items-center my-3'>
            <input type='checkbox' />
            <p className='text-sm ml-2 font-semibold'>Remember me</p>
         </div>
         <button className='bg-black text-white px-6 py-2 my-5'>LOG IN</button>
         <p className='text-gray-500 font-semibold'>LOST YOUR PASSWORD?</p>
        </div>
     </div>
    </div>
  )
}

export default User