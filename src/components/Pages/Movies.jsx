import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'
import AnimeCard from '../AnimeCard/AnimeCard'
import Loader from '../Loader/Loader'

const Movies = () => {

    const { id } = useParams()

    const [ movies, setMovies ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        fetchFromAPI(`anime-movies?page=${id}`)
        .then(data => {
            console.log(data)
            console.log(id)
            setMovies(data)
            setIsLoading(false)
        })
    }, [id])

  return (
    <>
        {isLoading && ( <Loader /> )}
        {!isLoading && (
            <div className='flex flex-wrap flex-row gap-2'>
            <h1>Anime Movies</h1>
            <div className='flex flex-wrap'>
                {movies.map(anime => (
                <AnimeCard key={anime.animeId} anime = {anime} width = {`150px`}/>
                ))}
            </div>
            </div>
        )}
    </>
  )
}

export default Movies