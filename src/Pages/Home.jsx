import React from 'react'
import '../App.css'
import { useStateContext } from '../Contexts/ContextProvider'
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import WinterCollection from '../Data/WinterCollection.json'
import Product from '../Components/Product';

const Home = () => {
  const {homeImg,setHomeImg} = useStateContext();
  const setImg1 = () =>{
    setHomeImg('hero')
  }
  const setImg2 = () =>{
    setHomeImg('hero2')
  }
  ////////////////////////////
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
  return (
    <div>
      <div className={`relative overflow-hidden hero-container ${homeImg === 'hero' ? 'bg-hero' : 'bg-hero2'}`}>
      <section className='z-20 text-white  w-full flex flex-col text-center items-center pb-10 hero mt-100 relative'>
        <p className='mt-10 mb-2 font-mono intro text-sm sm:text-base'>In the right outfit anything is possible</p>
        <p className='text-3xl w-200 sm:text-5xl sm:w-300 md:text-7xl md:w-450 mb-10 font-semibold mainp'>Unleash Your Fashion Experience !</p>
        <button className='bg-white text-black px-6 py-2 font-mono hover:bg-transparent hover:text-white transition cursor-pointer w-150'>Shop Now</button>
        <div onClick={setImg2} className='fixed text-white top-1/2 text-6xl z-30 opacity-25 right-5 cursor-pointer'><GoChevronRight/></div>
        <div onClick={setImg1} className='fixed text-white top-1/2 text-6xl z-30 opacity-25 left-5 cursor-pointer'><GoChevronLeft/></div>
       </section>
      </div>
      <div className='flex flex-col items-center mt-20'>
        <h2 className='text-4xl font-semibold'>Winter Collection</h2>
        <p className='font-mono text-gray-400 font-semibold mt-1'>Let us love winter for it is the spring of genius</p>
        <div className='mt-10'>{WinterProducts}</div>
      </div>
    </div>
    
  )
}

export default Home