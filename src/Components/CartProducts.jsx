import React from 'react'
import Cartitem from './Cartitem'
import { useStateContext } from '../Contexts/ContextProvider'

const CartProducts = () => {
    const {state} = useStateContext();
    const AddedProducts = state.cart
    const CartItems = AddedProducts.map((item) =>{
        return(
            <Cartitem 
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
    <div className='flex flex-col'>{CartItems}</div>
  )
}

export default CartProducts