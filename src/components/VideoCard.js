import React from 'react'
import { Link } from 'react-router-dom'
const VideoCard = ({info}) => {
    //console.log(info)
    const{statistics,snippet}=info
  return (<Link to={"/watch?v="+info?.id}>
    <div  className='h-[300px] w-[360px] rounded-xl transition duration-150  transform hover:scale-105 hover:shadow-2xl hover:shadow-red-400    overflow-hidden mb-8'>
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