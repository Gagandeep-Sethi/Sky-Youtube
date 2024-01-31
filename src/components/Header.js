import React, { useEffect, useState } from 'react'
import { youtube_logo,user_logo,menu_logo,search_logo, youtube_autocomplete_api } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { open } from '../utils/appSlice'
import SearchList from './SearchList'




const Header = () => {
  const[search , setSearch]=useState("")
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
    console.log(json)
    setSearchValue(json)

  }
  return (
    <div className=' flex grid-flow-col shadow-lg my-4 p-2 '>
        <div className='flex w-2/12 '>
            <img onClick={()=>menuClick()} className='h-8 ml-4 cursor-pointer' alt="Menu" src={menu_logo}></img>
            <img className='h-8 ml-6' alt="Youtube" src={youtube_logo}></img>
        </div>
        <div className='w-8/12  '>
          <div >
            <input className='h-10 ml-36 float-start pl-2 w-1/2 border-gray-400 border rounded-l-full' 
            type='text'
            placeholder='Search'
            value={search}
            onChange={(e)=>{
              setSearch(e.target.value)
            }}
            >
            </input>
            {searchValue&& searchValue.map((r,i)=>{
             return <SearchList key={i} list={r} />
            })}            
            </div>
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
