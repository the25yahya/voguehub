import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'

const Shop = () => {

  const {shop, setShop} = useStateContext();
  const CloseShop = () => {
    setShop(false);
   }
  return (
    <div onMouseLeave={CloseShop} className='flex justify-around px-5 py-5 absolute -bottom-150 -left-10 bg-white w-1000 text-black fade-in'>
        <div className='flex flex-col justify-start layout'>
            <h2 className='text-xl mb-3'>Shop List</h2>
            <p>Categories</p>
            <p>Slider</p>
            <p>All Products</p>
            <p>Men Products</p>
            <p>Women Products</p>
            <p>Kids Products</p>
        </div>
        <div className='flex flex-col layout'>
            <h2 className='text-xl mb-3'>Shop Pages</h2>
            <p>View Cart</p>
            <p>Checkout</p>
            <p>My Account</p>
            <p>Wishlist</p>
        </div>
        <div>
            <h2 className='text-xl mb-3'>New collections</h2>
            <div className='flex justify-betweem'>
              <div className='relative'><img className='w-200 brightness-50' src='https://www.brides.com/thmb/cXVZSdZOIvoy1th1_usj3X4HQXw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Main-Amsale-Fall-2024-Option-1-ce44143e181a43769f4e77ad3aae0625.jpg' />
              <h1 className='absolute top-16 left-10 text-4xl text-white'>Dresses</h1>
              </div>
              <div className='relative'><img className='w-200 ml-5 brightness-50' src='https://hips.hearstapps.com/hmg-prod/images/irina-shayk-is-seen-during-a-street-style-shoot-on-march-01-news-photo-1677750984.jpg?crop=1.00xw:0.669xh;0,0.148xh&resize=640:*' />
              <h1 className='absolute top-16 left-12 text-3xl text-white'>OuterWear</h1>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Shop