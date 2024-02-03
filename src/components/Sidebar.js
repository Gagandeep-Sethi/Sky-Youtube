import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const clicked=useSelector(store=>store.app.openSide)
  const list =["Shorts","Trending","Shoping ","Music","Films","Gaming","Live","News","Sports","Podcasts"]
  if(clicked)
  return (null)
  return  (
    
      <div className='w-[237px]     '>
        <ul>
            <Link to="/"><li className='cursor-pointer border-b-2 p-4 text-center transition ease-out duration-300 hover:bg-red-500 hover:text-white rounded-full '> Home</li></Link>
            {list.map((r)=>{
              return <li key={r} className='cursor-pointer  border-b-2 border-gray-200 transition ease-out duration-300 p-4 text-center hover:bg-red-500 hover:text-white rounded-full'>{r}</li>
            })}
            
        </ul>
        </div>
   
  )
}

export default Sidebar