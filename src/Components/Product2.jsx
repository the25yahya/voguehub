import React, {useState} from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Tooltip } from '@chakra-ui/react'
import { useStateContext } from '../Contexts/ContextProvider';

const Product2 = (props) => {
   const {state, dispatch,wishlistState, wishlistDispatch} = useStateContext();
    const [mainImg, setMainImg] = useState(props.img1);
  const setImg2 = () =>{
    setMainImg(props.img2);
  }
  const setImg1 = () =>{
    setMainImg(props.img1);
  }
  const addToCart = () =>{
    dispatch({ type : 'ADD_TO_CART', payload:props})
  };
  const addToWishlist = () =>{
    wishlistDispatch({ type : 'ADD_TO_WISHLIST', payload:props})
    console.log(wishlistState);
  };
  return (
    <div className='mt-5 mx-4'>
         <div className='relative group cursor-pointer'><img  onMouseEnter={setImg2} onMouseLeave={setImg1}  className='w-200' src={mainImg} />
          <div className='peer absolute bottom-0 py-3 w-full bg-white text-black items-center justify-between px-2 hidden group-hover:flex appear-from-bottom transition'>
           <Tooltip label='Add To Wishlist'><span onClick={addToWishlist}><FaRegHeart /></span></Tooltip>
           <p onClick={addToCart} className='text-sm border-x px-5 border-black'>ADD TO CART</p>
           <Tooltip label='View Details'><span><FaEye /></span></Tooltip>
          </div>
         </div>
         <div className='flex flex-col items-start mt-3'>
            <h2 className='font-semibold w-200'>{props.name}</h2>
            <p className='text-gray-500 text-sm font-bold'>{props.price}$</p>
         </div>
    </div>
  )
}

export default Product2