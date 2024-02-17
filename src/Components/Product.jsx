import React,{ useState } from 'react'
import { FaRegHeart,FaHeart } from "react-icons/fa";
const Product = (props) => {


  const [mainImg, setMainImg] = useState(props.img1);
  const setImg2 = () =>{
    setMainImg(props.img2);
  }
  const setImg1 = () =>{
    setMainImg(props.img1);
  }
  return (
    <div className='m-3'>
        <div onMouseEnter={setImg2} onMouseLeave={setImg1} className='relative'>
          <img 
            className='w-300 rounded-lg cursor-pointer'
            src={mainImg
            }
          />
          <div className='absolute border border-black rounded-full p-2 top-3 right-3 text-sm cursor-pointer'>
            <FaRegHeart/>
          </div>
          <div className='absolute bg-gray-600 text-white bottom-8 px-4 rounded-r-md'><p>{props.tag}</p></div>
        </div>
        <div className='flex justify-between items-center text-center mt-2 font-mono'>
            <p className='font-mono font-semibold'>{props.name}</p>
            <p className='font-semibold'>{props.price}$</p>
        </div>
    </div>
  )
}

export default Product