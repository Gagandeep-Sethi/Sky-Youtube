import React from 'react'
import { Link } from 'react-router-dom'
const VideoCard = ({info}) => {

    if(!info)return null
    const{statistics,snippet}=info
  return (<Link to={"/watch?v="+info?.id}>
    <div  className='h-80 w-80 rounded-xl transition duration-150  transform hover:scale-105 hover:shadow-2xl hover:shadow-black bg-gray-200     mb-8 mr-8'>
        <ul className='' >
            <li><img className='w-full rounded-xl ' alt="thumbnail"src={snippet?.thumbnails?.medium?.url}></img></li>
            <li className=' pt-2 truncate pl-4 '>{snippet?.title}</li>
            <li className='pt-2 pl-4'>{snippet.channelTitle}</li>
            <li className='pt-2 pl-4'>{statistics.viewCount}views</li>
        </ul>
    </div>
    </Link>
  )
}

export default VideoCard