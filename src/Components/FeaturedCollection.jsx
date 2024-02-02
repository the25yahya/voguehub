import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'


const FeaturedCollection = () => {
    const { isAnimated2} = useStateContext();
  return (
    <div className={`mt-50 animate-element animated2 ${isAnimated2 ? 'animated' : ''}`}>
        <div className='flex flex-col text-center'>
            <h1 className='text-4xl font-semibold'>Featured Collections</h1>
            <p className='font-mono text-gray-600 mb-10 mt-3'>TOP NEW COLLECTIONS WITH HARFA BRANDS EXPLORE NOW</p>
        </div>
        <div className='flex justify-center'>
            <div className='flex items-center flex-col mr-5'>
                <div className='relative'><img className='w-350 rounded-xl grayscale' src='https://www.realmenrealstyle.com/wp-content/uploads/2021/07/mens-jeans.jpg' /><div className='absolute top-1/3 w-full text-center'><p className='text-white text-5xl font-semibold '>JEANS</p></div></div>
                <div className='relative'><img className='rounded-xl w-350 grayscale mt-5 brightness-50' src='https://media.s-bol.com/Yn4WYZD14ZRn/J41WRK/550x825.jpg'/><div className='absolute top-1/2 text-center w-full'> <p className='text-white text-5xl font-semibold'>T-SHIRTS</p></div></div>
            </div>
            <div className='flex flex-col items-center mr-5'>
                <div className='relative'><img className='rounded-xl  w-360 mb-8' src='https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/12/09201018/hoodies-cover-image-1-680x1020.jpg' /><div className='absolute top-1/3 w-full text-center'><p className='text-white text-5xl font-semibold '>HOODIES</p><button className='mt-10 bg-black px-6 py-2 text-white rounded-xl pulsating-element hover:animate-none hover:bg-transparent hover:cursor-pointer transition'>DISCOVER</button></div></div>
                <div className='relative'><img className='w-360 rounded-xl grayscale brightness-50' src='https://media.cnn.com/api/v1/images/stellar/prod/comfy-shoes-nike-new-lead.jpg?c=16x9&q=h_833,w_1480,c_fill' /><div className='absolute top-1/3 w-full text-center'><p className='text-white text-5xl font-semibold '>SENAKERS</p></div></div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='relative'><img className='w-350 rounded-xl grayscale brightness-50' src='https://cdn.thewirecutter.com/wp-content/media/2023/11/totebags-2048px-cuyanabagexterior.jpg?auto=webp&quality=75&width=1024' /><div className='absolute top-1/3 w-full text-center'><p className='text-white text-5xl font-semibold '>BAGS</p></div></div>
                <div className='relative'><img className='rounded-xl w-350 grayscale mt-5 brightness-50' src='https://i.pinimg.com/564x/58/91/ba/5891bad79bbd5a6f9110b2564db76c67.jpg' /><div className='absolute top-1/3 w-full text-center'><p className='text-white text-5xl font-semibold '>JACKETS</p></div></div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCollection