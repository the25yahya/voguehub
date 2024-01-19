import React, {createContext, useContext, useState, useEffect, useReducer} from "react"
import PropTypes from "prop-types"
const StateContext = createContext();



const initialState = {
    cart : false,
    user : false,
} 


export const ContextProvider = ({children}) => {

  const [searchTerm, setSearchTerm] = useState('');
  ///////////////////////////////////////////////
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a delay for loading content
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }, []);
    /////////////////////////////////
    const [homeImg,setHomeImg] = useState('https://burst.shopifycdn.com/photos/red-on-red-fashion.jpg?width=925&format=pjpg&exif=0&iptc=0');
    return(
        <StateContext.Provider
          value={{setHomeImg,homeImg}}
        >
            {children}
        </StateContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export const useStateContext = () => useContext(StateContext);