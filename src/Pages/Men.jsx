import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'

const Men = () => {
  const {MenProducts} = useStateContext();
  return (
    <div className='pt-50'>
      <div className='flex pl-28 flex-wrap w-full'>{MenProducts}</div>
    </div>
  )
}

export default Men