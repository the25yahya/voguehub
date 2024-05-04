import React,{useState,useEffect} from 'react'
import { useStateContext } from '../Contexts/ContextProvider'
import Navbar from '../Components/Navbar';
import { LuSettings2 } from "react-icons/lu";
import Dropdown from '../Components/Dropdown';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Product2 from '../Components/Product2';
import axios from 'axios';

const AllProducts = () => {
  //const {AllProducts} = useStateContext();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/allProducts');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const AllProducts = products.map((item) =>{
    return(
      <Product2 
        key={item.name}
        name={item.name}
        img1={item.img1}
        img2={item.img2}
        img3={item.img3}
        img4={item.img4}
        img5={item.img5}
        price={item.price}
        description={item.description}
        type={item.type}
        tag={item.tag}
      />
    )
  })
  return (
    <div className='flex flex-col items-center'>
      <Navbar 
        navbarClasses='fixed w-full z-40 text-white flex justify-between items-center px-8 py-5 border-transparent border-b transition bg-black shadow-2xl'
      />
      <div className='mt-24 flex flex-col items-start relative'>
        <p className='flex items-center ml-5 text-sm'>
         <Link to='/'><span className='flex items-center cursor-pointer'>Home<FaAngleRight/></span></Link>
         <span>All Products</span>
        </p>
        <div className='flex justify-between w-full px-32 mt-12'>
         <div className='flex items-center text-sm'>
          <p className='mr-1'><LuSettings2 /></p>
          <p>FILTERS</p>
         </div>
         <div>
          <Dropdown />
         </div>
        </div>
        <div className='flex pl-28 flex-wrap w-full'>{AllProducts}</div>
      </div>
    </div>
  )
}

export default AllProducts