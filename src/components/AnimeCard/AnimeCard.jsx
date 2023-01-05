import React from 'react'
import { Link } from 'react-router-dom'

const AnimeCard = ( { anime: { animeImg, animeTitle, animeId}, width } ) => {

  if(width === '' || width === undefined) {
    width = '150px'
  }

  return (
    <div className={`w-[150px] m-1 hover:text-blue-500 hover:scale-110 transition-all`}>
        <Link to={`/anime/${animeId}`}>
        <img src={animeImg} alt="" className={`w-[150px] h-auto`}/>
          {animeTitle}
        </Link>
    </div>
  )
}

export default AnimeCard