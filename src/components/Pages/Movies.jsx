import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import { useParams, useNavigate } from 'react-router-dom'
import AnimeCard from '../AnimeCard/AnimeCard'
import Loader from '../Loader/Loader'

const Movies = () => {

    const { id } = useParams()
    let idToNavigate = Number(id)
    const navigate = useNavigate()

    const [ movies, setMovies ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        fetchFromAPI(`anime-movies?page=${id}`)
        .then(data => {
            if(data.error) return navigate(`/error`)
            setMovies(data)
            setIsLoading(false)
        })
    }, [id, navigate])

    const Back = () => {
        if(id === 1) return
        console.log(idToNavigate)
        navigate(`/movies/${idToNavigate - 1}`)
    }

    const Next = () => {
        if(id > 50) return
        navigate(`/movies/${idToNavigate + 1}`)
    }

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
            <div className='flex flex-wrap justify-center w-screen'>
                <button className='p-2 w-10 h-10 bg-green-300 m-1' onClick={Back}>{'<'}</button>
                <button className='p-2 w-10 h-10 bg-green-300 m-1' onClick={Next}>{'>'}</button>
            </div>
            </div>
        )}
    </>
  )
}

export default Movies