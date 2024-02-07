import React,{useEffect} from 'react'
import { IoIosSearch } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from '../Contexts/ContextProvider';
import { Link } from 'react-router-dom';


const SearchPage = () => {
  const {SearchClose} = useStateContext();
  return (
    <div className='p-20 flex flex-col items-center'>
      <Link to='/'><div onClick={SearchClose} className='absolute right-10 top-10 text-3xl cursor-pointer z-50'><TiDeleteOutline /></div></Link>
      <div className='flex items-center border-2 border-black w-400 p-3 justify-between'>
        <input
           placeholder='Search Products'
           className='text-sm placeholder:text-black placeholder:font-semibold outline-none'
        />
        <span><IoIosSearch /></span>
      </div>
    </div>
  )
}

export default SearchPage