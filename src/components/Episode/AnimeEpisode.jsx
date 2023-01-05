import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import AnimeVideoPlayer from '../AnimeVideoPlayer/AnimeVideoPlayer'
import Loader from '../Loader/Loader'
import EpisodeList from './EpisodeList'

const AnimeEpisode = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [ isLoading, setIsLoading ] = useState(true)
    const [ episodeList, setEpisodeList ] = useState([])
    const [ video, setVideo ] = useState()

    const animeId = id.replace(id.substring(id.indexOf('-episode')), '')

    useEffect(() => {
        fetchFromAPI(`vidcdn/watch/${id}`)
        .then(data => { 
          if(data.error) return navigate(`/error`)
          setVideo(data?.sources[0]?.file)
        })

        fetchFromAPI(`anime-details/${animeId}`)
        .then(data => {
          if(data.error) return navigate(`/error`)
          setEpisodeList(data?.episodesList)
          setIsLoading(false)
        })
    }, [id, animeId, navigate])

  return (
    <>
      {isLoading && ( <Loader /> )}
      {!isLoading && (
        <div>
          <AnimeVideoPlayer anime = {video}/>
          <EpisodeList episodeList = {episodeList}/>
        </div>
      )}
    </>
  )
}

export default AnimeEpisode