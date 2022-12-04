import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AnimeDetail from './components/AnimeDetail/AnimeDetail'
import Navbar from './components/Navbar/Navbar'
import AnimeEpisode from './components/Episode/AnimeEpisode'

const App = () => {

  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element = {<Home />}/>
            <Route path="/anime/:id" element = {<AnimeDetail />}/>
            <Route path="/watch/:id" element = {<AnimeEpisode />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App