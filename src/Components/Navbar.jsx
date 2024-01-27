import React,{useEffect,useState} from 'react'
import { FaChevronDown } from "react-icons/fa";
import '../App.css'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineMenu } from "react-icons/md";
import Shop from './Shop.jsx';
import { useStateContext } from '../Contexts/ContextProvider';
import NavCart from './NavCart';
import Products from './Products';
import PagesNav from './PagesNav';
import Sidebar from './Sidebar';

const Navbar = () => {

  const {shop,setShop,navCart,ProductsNav,setProductsNav,pages,setPages,sidebar,ToggleNavCart,ToggleSidebar} = useStateContext();
   const OpenShop = () => {
    setShop(true);
    setPages(false);
    setProductsNav(false);
   }
   const OpenProducts = () => {
    setProductsNav(true);
    setShop(false);
    setPages(false);
   }
   const OpenPages = () => {
    setPages(true);
    setProductsNav(false);
    setShop(false);
   }
   ///////////////////////////////////
   const [scrolling, setScrolling] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY > 0) {
         setScrolling(true);
       } else {
         setScrolling(false);
       }
     };
 
     window.addEventListener('scroll', handleScroll);
 
     // Cleanup the event listener on component unmount
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []); // Empty dependency array ensures the effect runs once when the component mounts
 
   const navbarClasses = `fixed w-full z-40 text-white flex justify-between items-center px-8 py-8 transition border-transparent border-b ${
     scrolling ? 'bg-black' : 'bg-transparent'
   }`;
   
  return (
    <nav className={navbarClasses}>
      <div className='hidden navigation lg:flex cursor-pointer'>
        <div onMouseEnter={OpenShop}      
        className='relative flex items-center text-sm  navp'>
          <span className='mr-1 font-semibold'>SHOP</span>
          <span className='mr-3'><FaChevronDown /></span>
          {shop ? (
            <Shop />
      ) : null}
      {/* Other content goes here */}
        </div>
        <div onMouseEnter={OpenProducts} className='relative flex items-center text-sm navp'>
          <span className='mr-1 font-semibold'>PRODUCTS</span>
          <span className='mr-3'><FaChevronDown /></span>
          {ProductsNav ? (
            <Products/>
      ) : null}
        </div>
        <div onMouseEnter={OpenPages} className='relative flex items-center text-sm navp'>
          <span className='mr-1 font-semibold'>PAGES</span>
          <span className='mr-3'><FaChevronDown /></span>
          {pages ? (
            <PagesNav />
      ) : null}
        </div>
        <div className='relative flex items-center text-sm navp'>
          <span className='mr-1 font-semibold'>BLOG</span>
        </div>
      </div>
      <div className='mr-0 sm:mr-48'>
        <h1 className='title text-3xl cursor-pointer'>VogueHUB</h1>
      </div>
      <div className='flex items-center'>
        <p className='mr-4 text-lg font-semibold cursor-pointer'>LOGIN</p>
        <div className='mr-4 text-2xl font-bold cursor-pointer'><IoIosSearch/></div>
        <div className='mr-4 text-xl cursor-pointer'><FaRegHeart/></div>
        <div onClick={ToggleNavCart} className='mr-4 text-xl cursor-pointer'>
        <HiOutlineShoppingBag/>
        {navCart ? (
            <NavCart />
      ) : null}
        </div>
        <div onClick={ToggleSidebar} className='text-4xl mr-2 block lg:hidden cursor-pointer'><MdOutlineMenu />
        {sidebar ? (
            <Sidebar />
      ) : null}
        </div>
      </div>
    </nav>
  )
}

export default Navbar