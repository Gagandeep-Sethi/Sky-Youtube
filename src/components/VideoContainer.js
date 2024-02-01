import React, { useEffect, useState } from 'react'
import { video_api } from '../utils/constant'
import VideoCard from './VideoCard'
const VideoContainer = () => {
  const [video ,setVideo]=useState([])
  useEffect(()=>{
    fetchVideos()
    
  
  },[])
  const fetchVideos=async()=>{
    const data=await fetch(video_api)
    const json=await data.json()
    //console.log(json)
    setVideo(json.items)
  }
  if(video.length===0){
    return<h1>loading</h1>
  }
  return (
    <div className='grid grid-cols-3 '>
      {video.map((res)=><VideoCard info={res} key={res.id} />)}
        
    </div>
  )
}

export default VideoContainer