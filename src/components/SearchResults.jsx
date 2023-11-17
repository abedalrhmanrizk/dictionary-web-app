import React from 'react'
import { Context } from '../context/AppProvider'
import Spinner from './Spinner'
import NotFound from './NotFound'
import SourceUrl from './SourceUrl'
import VerbMeanings from './VerbMeanings'
import Divider from './Divider'
import NounMeanings from './NounMeanings'
import Word from './Word'

function SearchResults() {
  const { data, error, isLoading } = React.useContext(Context)

  const word = data?.[0]?.word
  const phonetic = data?.[0]?.phonetic
  const nounMeanings = data?.[0]?.meanings[0]?.definitions
  const verbMeanings = data?.[0]?.meanings[1]?.definitions
  const sourceLinks = data?.[0]?.sourceUrls
  const synonyms = data?.[0]?.meanings[0]?.synonyms
  const wordPronunciation = data && data[0]?.phonetics.find((w) => w.audio !== '')

  if (error) console.log(error.message)
  if (isLoading) return <Spinner />
  if (data?.title) return <NotFound />

  if (data) {
    return (
      <main className='flex flex-col gap-[31px] sm:gap-[40px]'>
        <Word phonetic={phonetic} wordPronunciation={wordPronunciation} word={word} />
        {nounMeanings?.length > 0 && <Divider>noun</Divider>}
        <NounMeanings nounMeanings={nounMeanings} synonyms={synonyms} />
        {verbMeanings?.length > 0 && <Divider>verb</Divider>}
        <VerbMeanings verbMeanings={verbMeanings} />
        <SourceUrl sourceLinks={sourceLinks} />
      </main>
    )
  }
}

export default SearchResults
