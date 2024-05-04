import React,{useState, useEffect} from 'react'
import Navbar from '../Components/Navbar';
import axios from 'axios';
import Product2 from '../Components/Product2';


const Women = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.8.124:3001/allProducts');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const AllProducts = products.map((item) =>{
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

  return (
    <div className='flex flex-col items-center'>
      <Navbar 
        navbarClasses='fixed w-full z-40 text-white flex justify-between items-center px-8 py-5 border-transparent border-b transition bg-black shadow-2xl'
      />
      <div className='flex pl-28 flex-wrap w-full mt-50'>{AllProducts}</div>
    </div>
  )
}

export default Women