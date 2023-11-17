function VerbMeanings({ verbMeanings }) {
  return (
    verbMeanings?.length > 0 && (
      <div>
        <h3 className='text-gray-4 text-[16px] sm:text-[20px] mb-[25px]'>Meaning</h3>

        <ul className='list-disc  marker:text-main-color space-y-[13px] list-outside ml-5 text-gray-1 dark:text-white'>
          {verbMeanings?.map((definition, i) => (
            <li key={i} className='text-[15px] sm:text-[18px] sm:ml-[22px] '>
              {definition.definition} <br />{' '}
              <span className='mt-[13px] block text-[15px] sm:text-[18px] text-gray-4'>
                {definition.example && `“${definition.example}”`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  )
}

export default VerbMeanings
