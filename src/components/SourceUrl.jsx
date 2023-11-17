import LinkIcon from '../assets/images/icon-new-window.svg'

function SourceUrl({ sourceLinks }) {
  return (
    <div>
      <span className='w-full h-[1px] block bg-gray-5 dark:bg-gray-3'></span>
      <div className='mt-[24px] flex flex-col sm:flex-row sm:gap-[25px]'>
        <h4 href='#' className='text-[14px] underline text-gray-4'>
          Source
        </h4>
        {sourceLinks?.map((link, i) => (
          <a
            key={i}
            target='_blank'
            href={link}
            className=' text-black-1 text-[14px] underline flex gap-[8px] items-center dark:text-white'
            rel='noreferrer'
          >
            {link} <img src={LinkIcon} alt='' />
          </a>
        ))}
      </div>
    </div>
  )
}

export default SourceUrl
