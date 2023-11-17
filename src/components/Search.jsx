import React from 'react'
import SearchIcon from '../assets/images/icon-search.svg'
import { Context } from '../context/AppProvider'

function Search() {
  const { setQuery } = React.useContext(Context)
  const [value, setValue] = React.useState('')
  const [isEmpty, setIsEmpty] = React.useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (value === '') setIsEmpty(true)
    setQuery(value)
  }

  const searchRef = React.useRef(null)

  React.useEffect(() => {
    searchRef.current.focus()
  }, [])

  return (
    <form
      onSubmit={handleSubmit}
      className='relative flex flex-col gap-2  justify-center'
    >
      <div className='flex items-center'>
        <input
          ref={searchRef}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setIsEmpty(false)
          }}
          placeholder='Search for any word…'
          className={`px-[24px] py-[14px] sm:py-[19px] outline-none text-[16px] placeholder:opacity-25 text-[#2d2d2d] placeholder:text-gray-2 font-bold rounded-2xl bg-gray-6 w-full focus:outline-main-color  dark:bg-gray-1 dark:text-white dark:placeholder:text-white dark:placeholder:opacity-25 cursor-pointer  ${
            isEmpty && 'border border-error-color focus:outline-transparent  '
          }`}
        />
        <button className='absolute z-10 w-4 h-4 right-[24px]'>
          <img src={SearchIcon} alt='' />
        </button>
      </div>

      {isEmpty && (
        <p className='text-error-color sm:text-[18px]'>Whoops, can’t be empty…</p>
      )}
    </form>
  )
}

export default Search
