import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'

const Women = () => {
  const {WomenProducts} = useStateContext();

  return (
    <div className='pt-50'>
    <div className='flex pl-28 flex-wrap w-full'>{WomenProducts}</div>
  </div>
  )
}

export default Women