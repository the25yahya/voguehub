import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'
import { Link } from 'react-router-dom';

const Shop = () => {

  const {shop, setShop} = useStateContext();
  const CloseShop = () => {
    setShop(false);
   }
  return (
    <div onMouseLeave={CloseShop} className='flex justify-around shadow-xl px-5 py-5 absolute -bottom-150 -left-10 bg-white w-1000 text-black fade-in'>
        <div className='flex flex-col justify-start layout'>
            <h2 className='text-xl mb-3'>Shop List</h2>
            <p>Categories</p>
            <p>Slider</p>
            <Link to='/Allproducts'><p>All Products</p></Link>
            <Link to='/Men'><p>Men Products</p></Link>
            <Link to='/Women'><p>Women Products</p></Link>
            <Link to='/Kids'><p>Kids Products</p></Link>
        </div>
        <div className='flex flex-col layout'>
            <h2 className='text-xl mb-3'>Shop Pages</h2>
            <Link to='/Cart'><p>View Cart</p></Link>
            <Link to='/Checkout'><p>Checkout</p></Link>
            <p>My Account</p>
            <Link to='/Wishlist'><p>Wishlist</p></Link>
        </div>
        <div>
            <h2 className='text-xl mb-3'>New collections</h2>
            <div className='flex justify-between'>
              <div className='relative group'><img className='w-200 brightness-50' src='https://www.brides.com/thmb/cXVZSdZOIvoy1th1_usj3X4HQXw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Main-Amsale-Fall-2024-Option-1-ce44143e181a43769f4e77ad3aae0625.jpg' />
              <h2 className='absolute top-36 left-10 text-lg text-white border-b border-white fade-in hidden group-hover:block
              '>View Collection</h2>
              <h1 className='absolute top-16 left-10 text-4xl text-white  '>Dresses</h1>
              </div>
              <div className='relative group'><img className='w-200 ml-5 brightness-50' src='https://hips.hearstapps.com/hmg-prod/images/irina-shayk-is-seen-during-a-street-style-shoot-on-march-01-news-photo-1677750984.jpg?crop=1.00xw:0.669xh;0,0.148xh&resize=640:*' />
              <h2 className='absolute top-36 left-14 text-lg text-white border-b border-white fade-in hidden group-hover:block
              '>View Collection</h2>
              <h1 className='absolute top-16 left-12 text-3xl text-white'>OuterWear</h1>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Shop