import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AnimeDetail from './components/AnimeDetail/AnimeDetail'
import Navbar from './components/Navbar/Navbar'
import AnimeEpisode from './components/Episode/AnimeEpisode'
import SearchFeed from './components/SearchFeed/SearchFeed'
import Movies from './components/Pages/Movies'
import Genres from './components/Pages/Genres'

const App = () => {

  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element = {<Home />}/>
            <Route path="/anime/:id" element = {<AnimeDetail />}/>
            <Route path="/watch/:id" element = {<AnimeEpisode />}/>
            <Route path="/search/:id" element = {<SearchFeed />}/>
            <Route path="/movies/:id" element = {<Movies />}/>
            <Route path="/:genre/:id" element = {<Genres />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App