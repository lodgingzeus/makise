import React from 'react'
import ReactPlayer from 'react-player'

const AnimeVideoPlayer = ( { anime }) => {
  return (
    <div className='flex justify-center mt-2'>
        <ReactPlayer 
            url={anime}
            width="85%"
            height="85%"
            alt="Video Not Available"
            controls={true}
        />
    </div>
  )
}

export default AnimeVideoPlayer