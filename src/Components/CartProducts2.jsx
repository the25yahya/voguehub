import React from 'react'
import Cartitem2 from './Cartitem2'
import { useStateContext } from '../Contexts/ContextProvider'

const CartProducts = () => {
    const {state,dispatch} = useStateContext();
    const AddedProducts = state.cart
    const CartItems = AddedProducts.map((item) =>{
      const removeFromCart = () =>{
        dispatch({type:'REMOVE_FROM_CART', payload:item.name })
      }
        return(
            <Cartitem2 
          onClick={removeFromCart}
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