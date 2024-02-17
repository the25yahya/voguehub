import React from 'react'
import Cartitem from './Cartitem'
import { useStateContext } from '../Contexts/ContextProvider'

const CartProducts = () => {
    const {state} = useStateContext();
    const AddedProducts = state.cart
    const CartItems = AddedProducts.map((item) =>{
        return(
            <Cartitem 
            img1={item.img1}
            key={item.name}
            name={item.name}
            price={item.price}
            />
        )
    })
  return (
    <div className='flex flex-col'>{CartItems}</div>
  )
}

export default CartProducts