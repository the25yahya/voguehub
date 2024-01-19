import React from 'react'
import Navbar from '../Components/Navbar'
import '../App.css'
import { useStateContext } from '../Contexts/ContextProvider'
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const Home = () => {
  const {homeImg,setHomeImg} = useStateContext();
  const setImg1 = () =>{
    setHomeImg('https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
  }
  const setImg2 = () =>{
    setHomeImg('https://burst.shopifycdn.com/photos/red-on-red-fashion.jpg?width=925&format=pjpg&exif=0&iptc=0')
  }
  return (
    <div className='relative overflow-hidden hero-container'>
      <div onClick={setImg1} className='fixed text-white top-1/3 text-6xl z-10 opacity-25 right-5 cursor-pointer'><GoChevronRight/></div>
      <div onClick={setImg2} className='fixed text-white top-1/3 text-6xl z-10 opacity-25 left-5 cursor-pointer'><GoChevronLeft/></div>
      <Navbar />
      <img 
        src={homeImg}
        className='w-full hero-image brightness-50'
      />
      <section className='fixed z-20 text-white top-100 w-450 left-1/3 text-center'>
        <p className='mt-10 mb-2 font-mono'>In the right outfit anything is possible</p>
        <p className='text-7xl w-full mb-10 font-semibold'>Unleash Your Fashion Experience !</p>
        <button className='bg-white text-black px-6 py-2 font-mono hover:bg-transparent hover:text-white transition cursor-pointer'>Shop Now</button>
      </section>
    </div>
  )
}

export default Home