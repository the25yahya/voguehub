import React from 'react'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Home} from './Pages/index.jsx';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path='/' element = { <Home /> } />
       </Routes>
       <Footer />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App