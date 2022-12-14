// import { useEffect, useState } from 'react'
// import { fetchFromAPI } from '../../utils/fetchFromAPI'
import AnimeCard from '../AnimeCard/AnimeCard'

const TopAiring = ( { topAiring }) => {
    

    // useEffect(() => {
    //     fetchFromAPI(`top-airing`)
    //     .then(data => setTopAiring(data))
    // })

  return (
    <div className='flex flex-wrap flex-row gap-2'>
      <h1>Top Airing</h1>
      <div className='flex flex-wrap'>
        {topAiring.map(anime => (
        <AnimeCard key={anime.animeId} anime = {anime} width = {`150px`} />
        ))}
      </div>
    </div>
  )
}

export default TopAiring