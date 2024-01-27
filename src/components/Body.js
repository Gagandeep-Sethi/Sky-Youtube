import React from 'react'
import Sidebar from './Sidebar'
import ButtonList from './ButtonList'
import MainContainer from './MainContainer'
const Body = () => {
  return (
    <div className="flex">
        <div className='w-2/12'>
        <Sidebar/></div>
        <div className='w-10/12 '>
        <ButtonList/>
        <MainContainer/></div>
    </div>
  )
}

export default Body