import React from 'react'

const SearchList = ({list,setResult}) => {
  const handleClick=()=>{
    setResult()
  }
  return (
    <div className='bg-white z-10'>
        <ul className='bg-whie '>
            <li onClick={handleClick} className='p-2 cursor-pointer bg-white hover:bg-gray-100 border-b border-gray-400'>{list}</li>
        </ul>
    </div>
  )
}

export default SearchList