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
    <div className=''>
        <Sidebar/>
        <iframe className='' width="920" 
        height="500" 
        src={"https://www.youtube.com/embed/"+video.get("v") }
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " 
        allowFullScreen></iframe>
        <h1>video Details will be available here</h1>
        
        </div>
  )
}

export default WatchVideo