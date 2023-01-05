import { useState, useEffect } from 'react'
// import { fetchFromAPI } from '../../utils/fetchFromAPI'
// import { useParams, useNavigate } from 'react-router-dom'
import GenreCard from '../Genre/GenreCard'
import AnimeCard from '../AnimeCard/AnimeCard'
import Loader from '../Loader/Loader'

const Movies = () => {

    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    })

    const genres = [
        'Action',
        'Horror',
        'Adventure',
        'Drama',
        'Fantasy',
        'Suspense',
    ]

  return (
    <>
        {isLoading && ( <Loader /> )}
        {!isLoading && (
            <div className='flex flex-wrap flex-col gap-2'>
            <h1>Genres</h1>
            <div className='flex flex-wrap'>
                {genres.map(genre => (
                <GenreCard key={genre} genre = {genre.toLowerCase()} width = {`150px`}/>
                ))}
            </div>
            </div>
        )}
    </>
  )
}

export default Movies