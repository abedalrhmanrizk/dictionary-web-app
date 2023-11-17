import Navbar from './components/Navbar'
import Search from './components/Search'
import SearchResults from './components/SearchResults'
import AppProvider from './context/AppProvider'

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Search />
      <SearchResults />
    </AppProvider>
  )
}

export default App
