import React from 'react'

function Word({ phonetic, wordPronunciation, word }) {
  const audioRef = React.useRef(null)

  function playAudio() {
    audioRef.current.play()
  }
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-col gap-[7px] sm:gap-[11px]'>
        <h2 className='text-[32px] sm:text-[64px] font-bold text-gray-1 dark:text-white'>
          {word}
        </h2>
        <p className='text-[18px] sm:text-[24px] text-main-color'>{phonetic}</p>
      </div>

      <button onClick={playAudio}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-[48px] sm:w-[75px] fill-main-color transition-all group hover:fill-white'
          viewBox='0 0 75 75'
        >
          <circle
            cx='37.5'
            cy='37.5'
            r='37.5'
            className='opacity-25 group-hover:opacity-100 fill-main-color transition-all'
          />
          <path d='M29 27v21l21-10.5z' />
        </svg>
        <audio ref={audioRef} className='' src={wordPronunciation?.audio}></audio>
      </button>
    </div>
  )
}

export default Word
