import React from 'react'
import DictionaryImage from '../assets/images/logo.svg'

function Navbar() {
  const [isDark, setIsDark] = React.useState(() =>
    JSON.parse(localStorage.getItem('THEME') || false)
  )

  React.useEffect(() => {
    localStorage.setItem('THEME', isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <nav className='flex justify-between items-center'>
      <img src={DictionaryImage} alt='Dictionary Logo' />

      <div className='flex items-center gap-[26px] relative'>
        <span className='h-[32px] w-[1px] bg-gray-5'></span>

        <label className='relative inline-flex items-center cursor-pointer gap-[12px]'>
          <input
            type='checkbox'
            checked={isDark}
            className='sr-only peer'
            onChange={() => setIsDark(!isDark)}
          />
          <div className="w-11 h-6 bg-gray-4 peer-focus:outline-none   rounded-full dark:bg-main-color peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[4px] after:start-[5px] after:bg-white after:rounded-full after:h-4 after:w-4  after:transition-all "></div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='22'
            viewBox='0 0 22 22'
          >
            <path
              fill='none'
              stroke={isDark ? '#A445ED' : '#838383'}
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z'
            />
          </svg>
        </label>
      </div>
    </nav>
  )
}

export default Navbar
