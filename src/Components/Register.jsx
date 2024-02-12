import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider';
import { TiDelete } from "react-icons/ti";

const Register = () => {
  const {register, setRegister,login,CloseLogin,OpenLogin} = useStateContext();
  const CloseRegister = () =>{
    setRegister(false)
  }
  const LoginFunc = () =>{
    OpenLogin();
    setRegister(false);
  }
  return (
    <div className={`absolute top-100 w-full justify-center items z-50 shadow-5xl ${register ? 'flex appear-from-top' : 'hidden'}`}>
      <div className='flex flex-col text-center items-center absolute bg-white w-fit p-5 pb-12 pt-8'>
      <div onClick={CloseRegister} className='absolute top-2 right-2 text-2xl cursor-pointer'><TiDelete /></div>
      <h2 className='mb-5 text-2xl font-semibold'>REGISTER</h2>
      <input className='border border-black text-black mb-2 p-2' placeholder='Email' />
      <input className='border border-black text-black mb-2 p-2' placeholder='Password' />
      <button className='bg-black px-6 py-2 text-sm text-white mt-2 w-200'>REGISTER</button>
      <p onClick={LoginFunc} className='w-full mt-2 text-sm font-semibold cursor-pointer underline'>Already Has An Account</p>
     </div>
    </div>
  )
}

export default Register