import React from 'react'

const Comments = ({comment}) => {
  
  return (
    <div className='m-2'>
      <div className=' m-2 rounded-xl bg-amber-50'>
       <div className='flex flex-row'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
 
         <span className='font-bold block'>{comment.name}</span></div>
         <span className=' border-l-2  border-black ml-2 pl-1    block'>{comment.comment}</span>
        {comment.replies.map((comment,i)=>{
          return <Comments key={i} comment={comment}/>
        })}</div>
    </div>
  )
}

export default Comments



 

