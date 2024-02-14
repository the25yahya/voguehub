import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'

const AllProducts = () => {
  const {AllProducts} = useStateContext();

  return (
    <div className='pt-50'>
      <div className='flex pl-28 flex-wrap w-full'>{AllProducts}</div>
    </div>
  )
}

export default AllProducts