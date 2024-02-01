import React from 'react'
import Sidebar from './Sidebar'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
const Body = () => {
  
  return (
    <div className="grid grid-cols-12 mt-6 ">
        <div className='col-span-2' >
        <Sidebar /></div>
        <div className='col-span-10 ml-8 '>
        <ButtonList className="   "/>
        <div className='pt-4'>
        <VideoContainer className=""/> </div>
        </div>
    </div>
  )
}

export default Body