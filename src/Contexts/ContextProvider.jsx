import React, {createContext, useContext, useState, useEffect, useReducer} from "react"
import PropTypes from "prop-types"
const StateContext = createContext();
import Product from "../Components/Product";
import WinterCollection from '../Data/WinterCollection.json'

const initialState = {
    cart : false,
    user : false,
} 


export const ContextProvider = ({children}) => {
  const reloadPage = () => {
    window.location.reload();
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [shop, setShop] = useState(false);
  const [navCart, setNavCart] = useState(false);
  const [navWishlist, setNavWishlist] = useState(false);
  const [ProductsNav, setProductsNav] = useState(false);
  const [pages, setPages] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  ///////////////////////
  const ToggleNavCart = () => {
    setNavCart(!navCart);
  }
  const ToggleSidebar = () => {
    setSidebar(!sidebar)
  }
  ///////////////////////////////////////////////
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a delay for loading content
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }, []);
    /////////////////////////////////
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })}
    const [homeImg,setHomeImg] = useState('hero');
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const WinterProducts = WinterCollection.map((item) =>{
      return(
        <Product 
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
        />
      )
    })
    return(
        <StateContext.Provider
          value={{setHomeImg,homeImg,shop,setShop,navCart,setNavCart,ProductsNav,setProductsNav,pages,setPages,sidebar,setSidebar,ToggleNavCart,ToggleSidebar,reloadPage,loading,navWishlist, setNavWishlist, scrollToTop,WinterProducts}}
        >
            {children}
        </StateContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export const useStateContext = () => useContext(StateContext);