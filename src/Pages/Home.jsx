import React from 'react'
import '../App.css'
import { useStateContext } from '../Contexts/ContextProvider'
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import WinterCollection from '../Components/WinterCollection';
import FeaturedCollection from '../Components/FeaturedCollection';
import Categories from '../Components/Categories';


const Home = () => {
  const {homeImg,setHomeImg,navCart} = useStateContext();
  const setImg1 = () =>{
    setHomeImg('hero')
  }
  const setImg2 = () =>{
    setHomeImg('hero2')
  }
  ////////////////////////////
  return (
    <div className='transition'>
      <div className={`relative overflow-hidden hero-container`}>
      <div className={`herodiv -z-10 absolute overflow-hidden ${homeImg === 'hero' ? 'bg-hero' : 'bg-hero2'}`}></div>
      <section className='z-20 text-white  w-full flex flex-col text-center items-center pb-10 hero mt-100 mb-50 relative slide-left fade-in'>
        <p className='mt-10 mb-2 font-mono intro text-sm sm:text-base'>In the right outfit anything is possible</p>
        <p className='text-3xl w-200 sm:text-5xl sm:w-300 md:text-7xl md:w-450 mb-10 font-semibold mainp'>Unleash Your Fashion Experience !</p>
        <button className='bg-white text-black px-6 py-2 font-mono hover:bg-transparent hover:text-white transition cursor-pointer w-150 hover:animate-none pulsating-element'>Shop Now</button>
        <div onClick={setImg2} className='absolute text-white top-1/2 text-6xl z-30 opacity-50 right-5 cursor-pointer'><GoChevronRight/></div>
        <div onClick={setImg1} className='absolute text-white top-1/2 text-6xl z-30 opacity-50 left-5 cursor-pointer'><GoChevronLeft/></div>
       </section>
      </div>
      <WinterCollection/>
      <FeaturedCollection />
      <Categories />
    </div>
    
  )
}

export default Home