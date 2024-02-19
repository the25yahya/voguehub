import React from 'react'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Home, SearchPage, Blog, Men, Women, AllProducts, Kids, Wishlist, Cart, BestSellers, NewArrivals, User} from './Pages/index.jsx';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { useStateContext } from './Contexts/ContextProvider.jsx';
import './Components/Loader'
import Loader from './Components/Loader';
import NavWishlist from './Components/NavWishlist.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import NavCart from './Components/NavCart.jsx';
const App = () => {
  const {loading,navCart} = useStateContext();
  return (
    <ChakraProvider>
      <BrowserRouter>
      {loading ? <Loader /> : 
      <div>
      <NavWishlist />
      <Login />
      {navCart ? (
            <NavCart />
      ) : null}
      <Register />
       <Routes>
        <Route path='/' element = { <Home /> } />
        <Route path='/MyAccount' element = { <User /> } />
        <Route path='/Blog' element = { <Blog /> } />
        <Route path='/Search' element = { <SearchPage /> } />
        <Route path='/NewArrivals' element = { <NewArrivals /> } />
        <Route path='/BestSellers' element = { <BestSellers /> } />
        <Route path='/Men' element = { <Men /> } />
        <Route path='/Women' element = { <Women /> } />
        <Route path='/Kids' element = { <Kids /> } />
        <Route path='/AllProducts' element = { <AllProducts /> } />
        <Route path='/Cart' element = { <Cart /> } />
        <Route path='/Wishlist' element = { <Wishlist /> } />
       </Routes>
       <Footer />
      </div>
      }
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App