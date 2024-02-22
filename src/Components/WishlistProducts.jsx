import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'
import Wishlistitem from './Wishlistitem';

const WishlistProducts = () => {
    const {wishlistState, wishlistDispatch} = useStateContext();
    const AddedProducts = wishlistState.wishlist
    const WishlistItems = AddedProducts.map((item) =>{
      const removeFromWishlist = () =>{
        wishlistDispatch({type:'REMOVE_FROM_WISHLIST', payload:item.name })
      }
        return(
            <Wishlistitem 
          onClick={removeFromWishlist}
          key={item.name}
          name={item.name}
          img1={item.img1}
          img2={item.img2}
          img3={item.img3}
          img4={item.img4}
          img5={item.img5}
          price={item.price}
          description={item.description}
          tag={item.tag}
          type={item.type}
            />
        )
    })
  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center justify-around w-1/2 mr-50 font-semibold mb-8'>
        <p>Products</p>
        <p>Price</p>
        <p>Stock Status</p>
      </div>
      {WishlistItems}
    </div>
  )
}

export default WishlistProducts