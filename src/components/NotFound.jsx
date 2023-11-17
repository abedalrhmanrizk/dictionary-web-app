import React from 'react'
import { Context } from '../context/AppProvider'

function NotFound() {
  const { data } = React.useContext(Context)
  return (
    <div className=' text-center'>
      <span className='sm:text-[64px] text-[30px] mb-[44px]'>😕</span>
      <h2 className='text-gray-2 font-bold sm:text-[20px] mb-[24px] dark:text-white'>
        {data.title}
      </h2>
      <p className='text-[18px] text-gray-4'>{`${data.message} ${data.resolution}`}</p>
    </div>
  )
}

export default NotFound
