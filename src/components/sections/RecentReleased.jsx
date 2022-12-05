// import { useEffect, useState } from 'react'
// import { fetchFromAPI } from '../../utils/fetchFromAPI'
import AnimeCard from '../AnimeCard/AnimeCard'

const RecentReleased = ( { recentRelease }) => {
    // const [ recentRelease, setRecentRelease ] = useState([])

    // useEffect(() => {
    //     fetchFromAPI(`recent-release`)
    //     .then(data => setRecentRelease(data))
    // })

  return (
    <div className='flex flex-wrap flex-row gap-2'>
      <h1>Recent Released</h1>
      <div className='flex flex-wrap'>
        {recentRelease.map(anime => (
        <AnimeCard key={anime.animeId} anime = {anime} width = {`150px`}/>
        ))}
      </div>
    </div>
  )
}

export default RecentReleased