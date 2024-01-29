import React from 'react'
import { youtube_logo,user_logo,menu_logo,search_logo } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { open } from '../utils/appSlice'




const Header = () => {
  const dispatch=useDispatch()
  const menuClick=()=>{
     dispatch(open())
  }
  return (
    <div className=' flex grid-flow-col shadow-lg my-4 p-2 '>
        <div className='flex w-2/12 '>
            <img onClick={()=>menuClick()} className='h-8 ml-4 cursor-pointer' alt="Menu" src={menu_logo}></img>
            <img className='h-8 ml-6' alt="Youtube" src={youtube_logo}></img>
        </div>
        <div className='w-8/12  '>
            <input className='h-10 ml-36 float-start pl-2 w-1/2 border-gray-400 border rounded-l-full' type='text'
            placeholder='Search'
            >
            </input>
            <button className='h-10 bg-gray-100  rounded-r-full border border-gray-400 hover:bg-gray-200  '>
                <img className='h-10 px-3 py-2 w-12 rounded-full ' alt="Search" src={search_logo}></img>
            </button>

        </div>
        <div className='w-2/12  '>
        <img className="h-10 float-right pr-4"alt="Profile" src={user_logo}></img>
        </div>
    </div>
  )
}

export default Header
// border border-gray-400 rounded-r-full