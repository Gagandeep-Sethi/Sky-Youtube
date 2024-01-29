import React from 'react'
import { useSelector } from 'react-redux'
const Sidebar = () => {
  const clicked=useSelector(store=>store.app.openSide)
  if(clicked)
  return (null)
  return  (
    
      <div className=' w-[237.33px]    '>
        <ul>
            <li className='py-4 mx-auto text-center rounded-lg hover:bg-gray-200 '> Home</li>
            <li className='py-4 mx-auto text-center rounded-lg hover:bg-gray-200 '> Shorts</li>
            <li className='py-4 mx-auto text-center rounded-lg hover:bg-gray-200 '> Trending</li>
            <li className='py-4 mx-auto text-center rounded-lg hover:bg-gray-200 '> Shoping </li>
            <li className='py-4 mx-auto text-center rounded-lg hover:bg-gray-200 '> Music</li>
            <li className='py-4 mx-auto text-center rounded-lg hover:bg-gray-200 '> Films</li>
            <li className='py-4 mx-auto text-center rounded-lg hover:bg-gray-200 '> Gaming</li>
            <li className='py-4 mx-auto text-center rounded-lg hover:bg-gray-200 '> Live</li>
            <li className='py-4 mx-auto text-center rounded-lg hover:bg-gray-200 '> News</li>
            <li className='py-4 mx-auto text-center rounded-lg hover:bg-gray-200 '> Sports</li>
            <li className='py-4 mx-auto text-center rounded-lg hover:bg-gray-200 '> Podcasts</li>
            
        </ul>
        </div>
   
  )
}

export default Sidebar