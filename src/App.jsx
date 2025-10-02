import './App.css'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import Search from './components/Search'
import MovieList from './components/MovieList'

function App() {

  return (
    <div className="min-h-screen text-white">
      <Header />
      <main className="max-w-screen-xl mx-auto px-4">
        <HeroBanner />
        <MovieList />
      </main>
    </div>
  )
}

export default App
