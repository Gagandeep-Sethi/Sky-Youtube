import React from 'react'
import { youtube_logo} from '../utils/constant'
import { useDispatch} from 'react-redux'
import { open } from '../utils/appSlice'

import { Link } from 'react-router-dom'
import Search from './Search'




const Header = () => {
  
  const dispatch=useDispatch()
  
  
  return (
    <div className=' flex justify-between py-2 shadow-md w-screen '>
        <div className='flex ml-5'>    
            <svg  onClick={()=>dispatch(open())} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-10 cursor-pointer">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <Link to='/'><img className='ml-6 h-10  ' alt="Youtube" src={youtube_logo}></img></Link>
        </div>
        <div className='w-1/2'>
          <Search/>
        </div>
        <div className='flex justify-end '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mr-4">
         <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>

        </div>
    </div>
  )
}

export default Header
