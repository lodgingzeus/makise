import React from 'react'
import { Link } from 'react-router-dom'

const AnimeCard = ( { anime: { animeImg, animeTitle, animeId}, width } ) => {

  if(width === '' || width === undefined) {
    width = '150px'
  }

  return (
    <div className={`w-[${width}] m-1`}>
        <img src={animeImg} alt="" className={`w-[${width}] h-auto`}/>
        <Link to={`/anime/${animeId}`}>
          {animeTitle}
        </Link>
    </div>
  )
}

export default AnimeCard