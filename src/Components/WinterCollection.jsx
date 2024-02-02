import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'

const WinterCollection = () => {
    const { WinterProducts } = useStateContext();
  return (
    <div className='flex flex-col items-center mt-20'>
    <h2 className='text-4xl font-semibold'>Winter Collection</h2>
    <p className='font-mono text-gray-400 font-semibold mt-1 text-sm sm:text-base'>Let us love winter for it is the spring of genius</p>
    <div className='mt-10 flex flex-wrap justify-center'>    
     {WinterProducts}
     <button className='my-4 bg-black px-4 py-1 text-white font-mono rounded-lg transition hover:bg-transparent hover:text-black'>Load More Products</button>
    </div>
  </div>
  )
}

export default WinterCollection