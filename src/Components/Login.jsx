import React from 'react'
import { TiDelete } from "react-icons/ti";

const Login = () => {
  return (
    <div className='absolute top-100 w-full flex justify-center z-50 shadow-xl hidden'>
      <div className='flex flex-col text-center items-start absolute bg-white w-fit p-5 pb-12 pt-8'>
      <div className='absolute top-2 right-2 text-2xl cursor-pointer'><TiDelete /></div>
      <h2 className='mb-3 text-2xl font-semibold'>Log in</h2>
      <input className='border border-black text-black mb-2 p-2' placeholder='Email/User' />
      <input className='border border-black text-black mb-2 p-2' placeholder='Password' />
      <div className='flex items-center my-2 text-sm'>
       <div className='flex items-center'>
        <input type='chekbox' className='border border-black bg-white mr-2 w-4 h-4' />
        <p>Rememer me</p>
       </div>
       <p className='ml-4 underline'>FORGOT PASSWORD</p>
      </div>
      <button className='bg-black px-6 py-2 text-sm text-white mt-2 ml-5 w-200'>LOGIN</button>
      <p className='w-full mt-2 text-sm font-semibold cursor-pointer'>REGISTER</p>
     </div>
    </div>
  )
}

export default Login