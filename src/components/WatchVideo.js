import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { close } from '../utils/appSlice'

const WatchVideo = () => {
    const [video]=useSearchParams()

    const dispatch=useDispatch()
    useEffect(()=>{
     dispatch(close())
    })

    
  return (
    <div className='flex '>
        <Sidebar/>
        <iframe className='mx-8 my-4 rounded-2xl ' width="920" 
        height="500" 
        src={"https://www.youtube.com/embed/"+video.get("v") }
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " 
        allowFullScreen></iframe>
        
        </div>
  )
}

export default WatchVideo