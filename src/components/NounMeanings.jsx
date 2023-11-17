import React from 'react'
import { Context } from '../context/AppProvider'

function NounMeanings({ nounMeanings, synonyms }) {
  const { setQuery } = React.useContext(Context)

  return (
    <div>
      <h3 className='text-gray-4 text-[16px] sm:text-[20px] mb-[25px]'>Meaning</h3>

      <ul className='list-disc  marker:text-main-color space-y-[13px] text-gray-2 dark:text-white list-outside ml-5'>
        {nounMeanings?.map((definition, i) => (
          <li key={i} className='text-[15px] sm:text-[18px] sm:ml-[22px]  '>
            {definition.definition}
          </li>
        ))}
      </ul>

      {synonyms.length > 0 && (
        <div className='mt-[41px] flex gap-6 sm:gap-[40px]'>
          <h3 className='text-gray-4 text-[16px] sm:text-[20px]'>Synonyms</h3>

          <div className='flex flex-wrap gap-[12px]'>
            {synonyms?.map((synonym, i) => (
              <h4
                onClick={() => setQuery(synonym)}
                key={i}
                className=' text-main-color font-bold text-[16px] sm:text-[20px] cursor-pointer hover:underline underline-main-color'
              >
                {synonym}
              </h4>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default NounMeanings
