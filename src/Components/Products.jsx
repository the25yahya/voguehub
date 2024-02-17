import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'
import { Link } from 'react-router-dom';
import Product2 from './Product2';
import hotItems from '../Data/HotItems.json'

const Products = () => {
  const hotProducts = hotItems.map((item) =>{
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
        tag={item.tag}
      />
    )
  }) 
  const {ProductsNav,setProductsNav} = useStateContext();
  const CloseProducts = () => {
    setProductsNav(!ProductsNav);
  }
  return (
    <div onMouseLeave={CloseProducts} className='flex justify-around shadow-xl px-5 py-5 absolute -bottom-300 -left-40 bg-white w-1000 text-black fade-in'>
        <div>
            <h2 className='text-3xl mb-3'>Our Products</h2>
            <p className='my-1 font-semibold hover:opacity-50 cursor-pointer transition'>Hoodies</p>
            <p className='my-1 font-semibold hover:opacity-50 cursor-pointer transition'>T-shirts</p>
            <p className='my-1 font-semibold hover:opacity-50 cursor-pointer transition'>Sneakers</p>
            <p className='my-1 font-semibold hover:opacity-50 cursor-pointer transition'>Pants</p>
            <p className='my-1 font-semibold hover:opacity-50 cursor-pointer transition'>Dresses</p>
            <p className='my-1 font-semibold hover:opacity-50 cursor-pointer transition'>Outwear</p>
            <p className='my-1 font-semibold hover:opacity-50 cursor-pointer transition'>Jackets</p>
            <p className='my-1 font-semibold hover:opacity-50 cursor-pointer transition'>Bags</p>
        </div>
        <div>
            <h2 className='text-xl mb-3 font-semibold'>Hot Items</h2>
            <div className='flex'>
             {hotProducts}
            </div>
        </div>
    </div>
  )
}

export default Products