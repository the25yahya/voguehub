import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import '../App.css'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineMenu } from "react-icons/md";
import Shop from './Shop.jsx';
import { useStateContext } from '../Contexts/ContextProvider';
import Products from './Products';
import PagesNav from './PagesNav';
import { Tooltip } from '@chakra-ui/react'
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  const {shop,setShop,ProductsNav,setProductsNav,pages,setPages,sidebar,ToggleNavCart,ToggleSidebar,reloadPage,setNavWishlist,scrollToTop,OpenLogin,SearchOpen,token} = useStateContext();
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
   const OpenWishlist = () => {
    setNavWishlist(true);
    scrollToTop();
   }
   ///////////////////////////////////
  return (
    <nav className={props.navbarClasses}>
      <div className='hidden navigation lg:flex cursor-pointer'>
        <div onMouseEnter={OpenShop}      
        className='relative flex items-center text-sm navp'>
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
          <Link to='/Blog'><span className='mr-1 font-semibold'>BLOG</span></Link>
        </div>
      </div>
      <div onClick={reloadPage} className='mr-0 sm:mr-48'>
        <Link to='/'><h1 className='title text-3xl cursor-pointer'>VogueHUB</h1></Link>
      </div>
      <div className='flex items-center'>
       {token ? (
        <Link to="/MyAccount"><div className='text-2xl mr-5'><FaUserCircle /></div></Link>
      ) : (
        <p onClick={OpenLogin} className='mr-5 font-semibold cursor-pointer hidden lg:block'>LOGIN</p>
      )}

        <Link to='/Search' ><div onClick={SearchOpen} className='mr-3 text-xl font-bold cursor-pointer'><IoIosSearch/></div></Link>
        <Tooltip label='wishlist'><div onClick={OpenWishlist} className='mr-3 cursor-pointer text-lg'><FaRegHeart/></div></Tooltip>
        <Tooltip label='cart'>
        <div onClick={ToggleNavCart} className='mr-3 text-lg cursor-pointer'>
         <HiOutlineShoppingBag/>
        </div>
        </Tooltip>
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