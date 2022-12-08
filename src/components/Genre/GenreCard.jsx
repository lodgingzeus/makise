import React from 'react'
import { Link } from 'react-router-dom'

const GenreCard = ( { genre } ) => {
  return (
    <div className='font-bold m-1 hover:text-red-600'>
      <Link to = {`/${genre}/1`}>
       {genre}
      </Link>
    </div>
  )
}

export default GenreCard