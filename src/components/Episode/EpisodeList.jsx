import React from 'react'
import EpisodeCard from './EpisodeCard'

const EpisodeList = ({ episodeList }) => {

    const sortedEpisodeList = episodeList.sort((a, b) => (
        a.episodeNum - b.episodeNum
    ))

  return (
      <>
      <h1>Episodes:</h1>
        <div className='flex flex-wrap flex-column'>
        {sortedEpisodeList.map(episode => (
            <EpisodeCard key = {episode.episodeId} episode={episode}/>
        ))}
        </div>
    </>
  )
}

export default EpisodeList