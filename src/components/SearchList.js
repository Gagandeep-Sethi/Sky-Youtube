import React from 'react'

const SearchList = ({list,setResult}) => {
  const handleClick=()=>{
    setResult()
  }
  return (
    <div >
        <ul >
            <li onClick={handleClick} className='p-2 cursor-pointer'>{list}</li>
        </ul>
    </div>
  )
}

export default SearchList