import React from 'react'
import Sidebar from './Sidebar'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
const Body = () => {
  
  return (
    <div className="flex w-screen">
        <div >
        <Sidebar/></div>
        <div >
        <ButtonList/>
        <VideoContainer/></div>
    </div>
  )
}

export default Body