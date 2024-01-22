import React, {createContext, useContext, useState, useEffect, useReducer} from "react"
import PropTypes from "prop-types"
const StateContext = createContext();



const initialState = {
    cart : false,
    user : false,
} 


export const ContextProvider = ({children}) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [shop, setShop] = useState(false);
  const [navCart, setNavCart] = useState(false);
  const ToggleNavCart = () => {
    setNavCart(!navCart);
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
    const [homeImg,setHomeImg] = useState('hero');
    return(
        <StateContext.Provider
          value={{setHomeImg,homeImg,shop,setShop,navCart,setNavCart,ToggleNavCart}}
        >
            {children}
        </StateContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export const useStateContext = () => useContext(StateContext);