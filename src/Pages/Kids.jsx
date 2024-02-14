import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'
const Kids = () => {
   const { KidsProducts } = useStateContext();
  return (
    <div className='pt-50'>
      <div className='flex pl-28 flex-wrap w-full'>{KidsProducts}</div>
    </div>
  )
}

export default Kids