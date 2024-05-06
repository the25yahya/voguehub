import React,{useState} from 'react'
import { IoIosSearch } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from '../Contexts/ContextProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Product2 from '../Components/Product2';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const {SearchClose,PopularProducts} = useStateContext();
  const [searchResult, setSearchResult] = useState([]);
  const [isReturned, setIsReturned] = useState(false);
  const [showNotFoundAlert, setShowNotFoundAlert] = useState(false);

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
    if (searchTerm.trim() !== "") {
      axios.post("http://192.168.8.124:3001/Search", {
        searchTerm: searchTerm
      })
      .then(response => {
        console.log("Response:", response.data);
        setSearchResult(response.data.result);
        setIsReturned(true);
      })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          setShowNotFoundAlert(true); // Show the alert if item not found
          // Hide the alert after 3 seconds
          setTimeout(() => {
            setShowNotFoundAlert(false);
          }, 2000);
        } else {
          console.error("Error occurred:", error);
          setShowNotFoundAlert(false); // Hide the alert if another error occurred
          // Display a different kind of error message or handle it as required
        }
      });
    }
  };
  
  return (
    <div className='p-20 flex flex-col items-center fade-in'>
      <Link to='/'><div onClick={SearchClose} className='absolute right-10 top-10 text-3xl cursor-pointer z-50'><TiDeleteOutline /></div></Link>
      {/* Conditionally render the alert */}
      {showNotFoundAlert && (
        <div className="mb-5">
          <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Item not found in inventory!</AlertTitle>
            <AlertDescription>| Please try again</AlertDescription>
          </Alert>
        </div>
      )}
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
        {/* Conditionally render based on searchTerm */}
        {isReturned == false ? (
          <div className='mt-12 w-full flex flex-col justify-center items-center'>
            <h2 className='font-semibold text-3xl'>Popular Products</h2>
            <div className='flex items-center mt-5 flex-wrap justify-center'>{PopularProducts}</div>
          </div>
        ) : (
          <div className='mt-12 w-full flex flex-col justify-center items-center'>
           <div className='flex pl-28 flex-wrap w-full'>{ReturnedProducts}</div>
          </div>
        )}
    </div>
  );
  
}

export default SearchPage