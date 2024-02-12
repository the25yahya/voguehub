import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'

const Men = () => {
  const {MenProducts} = useStateContext();
  return (
    <div className='pt-50'>
      <div className='flex px-10'>{MenProducts}</div>
    </div>
  )
}

export default Men