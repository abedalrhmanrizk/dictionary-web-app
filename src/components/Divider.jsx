function Divider({ children }) {
  return (
    <div className='flex gap-[20px] items-center'>
      <span className='font-bold italic text-[18px] sm:text-[24px] dark:text-white'>
        {children}
      </span>
      <span className='w-full h-[1px] bg-gray-5 dark:bg-gray-3'></span>
    </div>
  )
}

export default Divider
