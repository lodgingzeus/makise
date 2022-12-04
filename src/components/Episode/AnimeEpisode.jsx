import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import AnimeVideoPlayer from '../AnimeVideoPlayer/AnimeVideoPlayer'
import EpisodeList from './EpisodeList'

const AnimeEpisode = () => {

    const { id } = useParams()

    const [ episodeList, setEpisodeList ] = useState([])
    const [ video, setVideo ] = useState()

    const animeId = id.replace(id.substring(id.indexOf('-episode')), '')

    useEffect(() => {
        fetchFromAPI(`vidcdn/watch/${id}`)
        .then(data => setVideo(data?.sources[0]?.file))

        fetchFromAPI(`anime-details/${animeId}`)
        .then(data => setEpisodeList(data?.episodesList))
    }, [id, animeId])

  return (
    <div>
        <AnimeVideoPlayer anime = {video}/>
        <EpisodeList episodeList = {episodeList}/>
    </div>
  )
}

export default AnimeEpisode