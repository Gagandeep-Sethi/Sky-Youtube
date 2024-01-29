import React from 'react'

const VideoCard = ({info}) => {
    console.log(info)
    const{statistics,snippet}=info
  return (
    <div className=' w-[320px] rounded-lg bg-gray-100 m-4 shadow-xl'>
        <ul className='' >
            <li><img className='rounded-lg' alt="thumbnail"src={snippet?.thumbnails?.medium?.url}></img></li>
            <li>{snippet?.title}</li>
            <li>{snippet.channelTitle}</li>
            <li>{statistics.viewCount}views</li>
        </ul>
        
        


    </div>
  )
}

export default VideoCard