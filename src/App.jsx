import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AnimeDetail from './components/AnimeDetail/AnimeDetail'
import Navbar from './components/Navbar/Navbar'
import AnimeEpisode from './components/Episode/AnimeEpisode'
import SearchFeed from './components/SearchFeed/SearchFeed'
import { Movies, Genres, GenresPage, ErrorPage } from './components/Pages'


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
            <Route path="/:genres/:id" element = {<Genres />}/>
            <Route path="/genres" element = {<GenresPage />}/>
            <Route path="/error" element = {<ErrorPage />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App