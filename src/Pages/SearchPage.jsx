import React,{useEffect} from 'react'
import { IoIosSearch } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from '../Contexts/ContextProvider';
import { Link } from 'react-router-dom';


const SearchPage = () => {
  const {SearchClose,PopularProducts} = useStateContext();
  return (
    <div className='p-20 flex flex-col items-center fade-in'>
      <Link to='/'><div onClick={SearchClose} className='absolute right-10 top-10 text-3xl cursor-pointer z-50'><TiDeleteOutline /></div></Link>
      <div className='flex items-center border-2 border-black w-400 p-3 justify-between'>
        <input
           placeholder='Search Products'
           className='text-sm w-full placeholder:text-black placeholder:font-semibold outline-none'
        />
        <span><IoIosSearch /></span>
      </div>
      <div className='mt-12 w-full flex flex-col justify-center items-center'>
        <h2 className='font-semibold text-3xl'>Popular Products</h2>
        <div className='flex items-center mt-5 flex-wrap justify-center'>{PopularProducts}</div>
      </div>
    </div>
  )
}

export default SearchPage