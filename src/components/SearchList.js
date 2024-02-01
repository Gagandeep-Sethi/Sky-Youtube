import React from 'react'

const SearchList = ({list}) => {
  return (
    <div >
        <ul >
            <li className='p-2'>{list}</li>
        </ul>
    </div>
  )
}

export default SearchList