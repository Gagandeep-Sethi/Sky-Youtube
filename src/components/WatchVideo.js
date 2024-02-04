import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { close } from '../utils/appSlice'
import Comments from './Comments'
import { commentsList } from '../utils/mockComments'
import LiveChat from './LiveChat'

const WatchVideo = () => {
    const [video]=useSearchParams()

    const dispatch=useDispatch()
    useEffect(()=>{
     dispatch(close())
    })

    
  return (
    <div className='flex mt-6'>
         <div className="">
          <Sidebar  />
        </div>
        <div className='ml-4 '>
        <iframe className='rounded-xl' width="800" 
        height="450" 
        src={"https://www.youtube.com/embed/"+video.get("v") }
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " 
        allowFullScreen></iframe>
        <span className='bg-gray-300  inline'>
        {
          commentsList.map((comment,i)=>{
            return <Comments key={i} comment={comment}/>
        })
        }</span>
        
        </div>
        <div className='bg-slate-200 w-full h-[500px] ml-2 rounded-xl '>
          <LiveChat />
        </div>
        
        
        
        </div>
  )
}

export default WatchVideo