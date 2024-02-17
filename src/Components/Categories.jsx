import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../Contexts/ContextProvider'

function Categories() {
  const {scrollToTop} = useStateContext();
  return (
    <div className='flex items-center mt-50 justify-center flex-wrap'>
        <div className='relative mx-2 mb-4'>
          <img className='w-390'  src='https://static.reserved.com/media/catalog/product/cache/850/a4e40ebdc3e371adff845072e1c73f37/4/0/4049W-59X-002-1-719326_16.jpg' />
          <div className='absolute bottom-5 left-6'>
           <p className='text-white text-3xl font-semibold mb-2'>MEN</p>
           <Link to='/Men' ><button onClick={scrollToTop}  className='bg-white px-4 py-1 hover:bg-transparent transition cursor-pointer hover:text-white'>SHOP NOW</button></Link>
          </div>
        </div>
        <div className='relative mx-2 mb-4'>
          <img className='w-400'  src='https://www.bodenimages.com/productimages/r1aproductlarge/23waut_t1475_blk_m01.jpg' />
          <div className='absolute bottom-5 left-5'>
           <p className='text-white text-3xl font-semibold mb-2'>WOMEN</p>
           <Link to='/Women'><button  onClick={scrollToTop}  className='bg-white px-4 py-1 hover:bg-transparent transition cursor-pointer hover:text-white'>SHOP NOW</button></Link>
          </div>
        </div>
        <div className='relative mx-2 mb-4'>
          <img className='w-400' src='https://asset1.cxnmarksandspencer.com/is/image/mands/SD_04_T88_1474I_JA_X_EC_3?wid=1024&qlt=80' />
          <div className='absolute bottom-5 left-5'>
           <p className='text-white text-3xl font-semibold mb-2'>KIDS</p>
           <Link to='/Kids'><button  onClick={scrollToTop}  className='bg-white px-4 py-1 hover:bg-transparent transition cursor-pointer hover:text-white'>SHOP NOW</button></Link>
          </div>
        </div>
    </div>
  )
}

export default Categories