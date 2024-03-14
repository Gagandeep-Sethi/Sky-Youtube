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
    <div className=' mt-6 w-screen'>
         <div className="">
          <Sidebar  />
        </div>

        <div className='ml-4 flex w-full '>
              <iframe className='rounded-xl w-2/3 '  
              height="500" 
              src={"https://www.youtube.com/embed/"+video.get("v") }
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " 
              allowFullScreen></iframe>

             <div className='bg-black w-1/3 h-[500px] ml-2 rounded-xl '>
              <p className='text-center text-white text-xl bg-red-400 rounded-xl'>Live Chat</p>
               <LiveChat />
             </div>
        </div>
        <h1 className='text-center my-8 text-3xl font-bold '>Comment section</h1>
        <div className=' border-2 mx-2 border-black rounded-xl bg-black'>
        {
          commentsList.map((comment,i)=>{
            return <Comments key={i} comment={comment}/>
        })
        }</div>
        
        
        
        
        </div>
  )
}

export default WatchVideo