import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'
import Navbar from '../Components/Navbar';

const Men = () => {
  const {MenProducts} = useStateContext();
  return (
    <div className=''>
      <Navbar />
      <div className='flex pl-28 flex-wrap w-full'>{MenProducts}</div>
    </div>
  )
}

export default Men