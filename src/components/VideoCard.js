import React from 'react'
import { Link } from 'react-router-dom'
const VideoCard = ({info}) => {
    console.log(info)
    const{statistics,snippet}=info
  return (<Link to={"/watch?v="+info?.id}>
    <div  className=' w-[320px] rounded-lg bg-gray-100 m-4 shadow-xl'>
        <ul className='' >
            <li><img className='rounded-lg' alt="thumbnail"src={snippet?.thumbnails?.medium?.url}></img></li>
            <li>{snippet?.title}</li>
            <li>{snippet.channelTitle}</li>
            <li>{statistics.viewCount}views</li>
        </ul>
    </div>
    </Link>
  )
}

export default VideoCard