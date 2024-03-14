import React, { useEffect} from 'react'
import { video_api } from '../utils/constant'
import VideoCard from './VideoCard'
import { useDispatch, useSelector } from 'react-redux'
import { addVideos } from '../utils/videoSlice'
const VideoContainer = () => {
  //const [video ,setVideo]=useState([])
  const videos=useSelector(Store=>Store?.video?.video)
  const dispatch=useDispatch()
  console.log(videos)
  useEffect(()=>{
    if(!videos)fetchVideos()
    
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch, videos])
  const fetchVideos=async()=>{
    try {
      
      
        const data=await fetch(video_api)
    const json=await data.json()
    dispatch(addVideos(json.items))
    console.log(videos)
      
      
    //setVideo(json.items)
      
    } catch (error) {
      console.log(error)
    }
    
  }
  if(!videos || videos.length===0){
    return<h1>loading</h1>
  }
  return (
    <div className='flex flex-wrap ml-8 mt-8 justify-evenly'>
      {videos&&videos.map((res)=><VideoCard info={res} key={res.id} />)}
        
    </div>
  )
}

export default VideoContainer