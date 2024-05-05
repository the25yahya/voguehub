import React,{useState} from 'react'
import { IoIosSearch } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from '../Contexts/ContextProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Product2 from '../Components/Product2';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const {SearchClose,PopularProducts} = useStateContext();
  const [searchResult, setSearchResult] = useState([]);
  const [isReturned, setIsReturned] = useState(false);
  const ReturnedProducts = searchResult.map((item) =>{
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
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const apiCallSearch = () => {
    axios.post("http://192.168.8.124:3001/Search", {
      searchTerm: searchTerm // Assuming searchTerm is defined somewhere in your component
    })
    .then(response => {
      console.log("Response:", response.data);
      setSearchResult(response.data.result);
      setIsReturned(true)
    })
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status === 400) {
          window.alert("Item not found in inventory");
        } else {
          console.error("Server responded with an error:", error.response.data);
          window.alert("An unexpected error occurred. Please try again later.");
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server:", error.request);
        window.alert("No response received from the server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
        window.alert("An error occurred. Please try again later.");
      }
    });
  };
  
  return (
    <div className='p-20 flex flex-col items-center fade-in'>
      <Link to='/'><div onClick={SearchClose} className='absolute right-10 top-10 text-3xl cursor-pointer z-50'><TiDeleteOutline /></div></Link>
      <div className='flex items-center border-2 border-black w-400 p-3 justify-between'>
        <input
          placeholder='Search Products'
          className='text-sm w-full placeholder:text-black placeholder:font-semibold outline-none'
          id="searchTerm"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <span onClick={apiCallSearch} className='cursor-pointer'><IoIosSearch /></span>
      </div>
      <div className='mt-12 w-full flex flex-col justify-center items-center'>
        <h2 className='font-semibold text-3xl'>Popular Products</h2>
        {/* Conditionally render based on searchTerm */}
        {isReturned == false ? (
          <div className='flex items-center mt-5 flex-wrap justify-center'>{PopularProducts}</div>
        ) : (
          <div className='flex pl-28 flex-wrap w-full mt-50'>{ReturnedProducts}</div>
        )}
      </div>
    </div>
  );
  
}

export default SearchPage