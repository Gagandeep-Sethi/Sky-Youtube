import React from 'react'
import Sidebar from './Sidebar'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
const Body = () => {
  
  return (
    <div className="w-full flex  ">
        <div className='absolute z-10' >
        <Sidebar /></div>
        <div className='overflow-x-scroll py-2'>
        <ButtonList className="  "/>
        <div className=' '>
        <VideoContainer className=""/> </div>
        </div>
    </div>
  )
}

export default Body