import React, { useEffect, useState } from 'react'
import { youtube_logo, youtube_autocomplete_api } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { open } from '../utils/appSlice'
import SearchList from './SearchList'




const Header = () => {
  const[search , setSearch]=useState("")
  const[checked,setChecked]=useState(true)
  // eslint-disable-next-line no-unused-vars
  const[searchValue,setSearchValue]=useState([])
  const dispatch=useDispatch()
  const menuClick=()=>{
     dispatch(open())
  }
  useEffect(()=>{
    const timer=setTimeout(()=>getSearchResult(),200)//it is how delay is added to search api call to decrease api calls by few and optimize it more
    return(()=>clearTimeout(timer))//cleartimeout is done here bcz to again set the clock to 200 ms delay otherwise timer will keep going (as when our state is updates means it is rerendered as it is destroyed and in this case it is dependend on it so so return of useEffect will be called)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search])
  const getSearchResult=async()=>{
    const data=await fetch(youtube_autocomplete_api+search)
    const json=await data.json()
    //console.log(json[1])
    setSearchValue(json[1])

  }
  return (
    <div className='grid grid-cols-3 py-6 shadow-xl '>
        <div className='flex ml-5'>    
            <svg  onClick={()=>menuClick()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-10">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <img className='ml-6 h-10  ' alt="Youtube" src={youtube_logo}></img>
        </div>
        <div className=' '>
          <div className='flex content-end justify-center relative'>
          
            <input className='p-2 border border-gray-400 w-2/3 rounded-l-full pl-2' 
            type='text'
            placeholder='Search'
            value={search}
            onFocus={()=>{setChecked(true)}}
            onBlur={()=>{setChecked(false)}}
            onChange={(e)=>{
              setSearch(e.target.value)
            }}
            >
            </input>
            <button className='block border border-gray-400 rounded-r-full p-2   '>
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-4  ">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

            </button>
               
            </div>
            <div className='absolute top-20  left-[550px] w-80  bg-white '>
            {checked&& searchValue.map((r,i)=>{
             return  <SearchList  key={i} list={r} />
            })}   
            </div>
             
              

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
