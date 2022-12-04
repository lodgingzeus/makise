import React from 'react'
import { NavLink } from 'react-router-dom'

const EpisodeCard = ( { episode }) => {
  return (
    <div className='m-1 border-2 w-16 h-10 bg-slate-400 flex justify-center'>
        <NavLink to={`/watch/${episode.episodeId}`}>
            {episode.episodeNum}
        </NavLink>
    </div>
  )
}

export default EpisodeCard