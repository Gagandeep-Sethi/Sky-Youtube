import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchList from './SearchList'
import { searchCache } from '../utils/searchSlice'
import { youtube_autocomplete_api } from '../utils/constant'

const Search = () => {
  const [search, setSearch] = useState("")
  const searchData = useSelector((store) => store.search)
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState([])
  const searchRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchData[search]) {
        setSearchValue(searchData[search])
      } else {
        getSearchResult();
      }
    }, 200)

    return () => clearTimeout(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, searchData])

  const getSearchResult = async () => {
    const data = await fetch(youtube_autocomplete_api + search)
    const json = await data.json()
    dispatch(searchCache({ [search]: json[1] }))
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchValue([])
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={searchRef}>
      <div className='w-full '>
        <div className='flex content-end justify-center relative'>

          <input className='p-2 border border-gray-400 w-2/3 rounded-l-full pl-4'
            type='text'
            placeholder='Search'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />

          <button className='block border border-gray-400 rounded-r-full p-2   '>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6  ">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

          </button>

        </div>

        <div className='absolute top-15  left-[37%] w-96  bg-white z-10 '>
          {searchValue.map((r, i) => {
            return <SearchList key={i} list={r} setResult={() => { setSearch(r) }} />
          })}
        </div>

      </div>
      
    </div>
  )
}

export default Search
