import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'

const PagesNav = () => {
  const {setPages} = useStateContext();
  const ClosePages = () => {
    setPages(false);
  }
  return (
    <div onMouseLeave={ClosePages} className='bg-white p-8 text-black absolute -bottom-140 flex flex-col text-start w-180 fade-in'>
        <p className='mb-2 text-base hover:opacity-50 transition'>About us</p>
        <p className='mb-2 text-base hover:opacity-50 transition'>Contact us</p>
        <p className='mb-2 text-base hover:opacity-50 transition'>SHipping & Return</p>
        <p className='mb-2 text-base hover:opacity-50 transition'>Help & FAQs</p>
    </div>
  )
}

export default PagesNav