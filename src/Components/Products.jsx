import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'
import { Link } from 'react-router-dom';

const Products = () => {
  const {ProductsNav,setProductsNav} = useStateContext();
  const CloseProducts = () => {
    setProductsNav(!ProductsNav);
  }
  return (
    <div onMouseLeave={CloseProducts} className='flex justify-around shadow-xl px-5 py-5 absolute -bottom-250 -left-40 bg-white w-1000 text-black fade-in'>
        <div>
            <h2 className='text-3xl mb-3'>Our Products</h2>
            <Link to='/Men'><p className='hover:opacity-45 transition text-lg font-semibold my-2 '>Men Products</p></Link>
            <Link to='/Women'><p className='hover:opacity-45 transition text-lg font-semibold my-2 '>Women Products</p></Link>
            <Link to='/Kids'><p className='hover:opacity-45 transition text-lg font-semibold my-2 '>Kids Products</p></Link>
            <p className='hover:opacity-45 transition text-lg font-semibold my-2 '>New Arrivals</p>
            <p className='hover:opacity-45 transition text-lg font-semibold my-2  '>Best Sellers</p>
        </div>
        <div>
            <h2 className='text-xl mb-3 font-semibold'>Hot Items</h2>
            <div className='flex'>
            <div className='flex flex-col items-center justify-center mr-8'>
                <img className='w-200' src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5faf87bb-9aee-4ee5-a586-ecb7cc3cb070/sportswear-phoenix-cozy-boucl%C3%A9-womens-loose-long-knit-cardigan-G7MT28.png' />
                <h3 className='text-lg font-semibold my-1'>Phoenix Cozy Boucle</h3>
                <h4 className='text-xl'>180$</h4>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img
              className='w-200'
              src='https://www.evernew.ca/media/catalog/product/A/l/AllTerritories_OnBody_28498406_C.jpg?width=850&height=1118&canvas=850,1118&quality=80&bg-color=255,255,255&fit=bounds&auto=webp' />
              <h2 className='text-lg font-semibold my-1'>Maeve Pleated Polo Dress</h2>
              <h4 className='text-xl'>179$</h4>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Products