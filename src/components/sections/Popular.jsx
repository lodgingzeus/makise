// import { useState, useEffect} from 'react'
// import { fetchFromAPI } from '../../utils/fetchFromAPI'
import AnimeCard from '../AnimeCard/AnimeCard'


const Popular = ( { popular } ) => {
    // const [ popular, setPopular ] = useState([])

    // useEffect(() => {
    //     fetchFromAPI(`popular`)
    //     .then(data => setPopular(data))
    // })

  return (
    <div className='flex flex-wrap flex-row gap-2'>
      <h1>Popular Anime</h1>
      <div className='flex flex-wrap'>
        {popular.map(anime => (
        <AnimeCard key={anime.animeId} anime = {anime} width = {`150px`}/>
        ))}
      </div>
    </div>
  )
}

export default Popular