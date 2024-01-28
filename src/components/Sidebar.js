import React from 'react'

const Sidebar = () => {
  return (
    <div className=' border border-black h-screen'>
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