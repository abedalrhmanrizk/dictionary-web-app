import React from 'react'
import useSWRImmutable from 'swr/immutable'

export const Context = React.createContext(null)

function fetcher(url) {
  if (url === 'https://api.dictionaryapi.dev/api/v2/entries/en/') return
  return fetch(url).then((r) => r.json())
}

function AppProvider({ children }) {
  const [query, setQuery] = React.useState('')
  const key = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
  const { data, error, isLoading } = useSWRImmutable(key, fetcher)

  return (
    <Context.Provider value={{ query, setQuery, data, error, isLoading }}>
      <div className='flex flex-col gap-[24px] sm:gap-[50px] font-serif'>{children}</div>
    </Context.Provider>
  )
}

export default AppProvider
