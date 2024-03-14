import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'

import { addMsg} from '../utils/chatSlice'
import { nameGenerator, randomText } from '../utils/helper'

const LiveChat = () => {
    const messages=useSelector((store)=>store.chat.messages)
    
    const [ourChat,setOurChat]=useState("")
    const dispatch=useDispatch()
    useEffect(()=>{
        const msgInterval =setInterval(()=>{
            dispatch(addMsg(getChat()))
            


        },1500)
        
        return (()=>clearInterval(msgInterval))   //it works as garbage collector otherwise it will keep doing it even if we are on another page

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const getChat=()=>{
        return({
            name:nameGenerator(),
            message:randomText(20)
        })
    }

  return (
    <div className=''>
        <div className='h-[460px] overflow-y-auto flex flex-col-reverse '>
            {messages.length>0 ?messages.map((r,i)=><ChatMessage key={i} name={r.name} message={r.message} />) :null}

            

        </div>
        <form className='bg-white  h-[40px]  flex justify-between rounded-xl '>
            <input
            className='pl-2 rounded-xl  w-full border border-black'
            value={ourChat}
            placeholder='(Sky)Type to chat...'
            onChange={(e)=>{
                setOurChat(e.target.value)

            }}
            >
            </input>
            <button
            className='mr-2'
            onClick={(e)=>{
                e.preventDefault()
                
                dispatch(addMsg({
                    name:"Sky",
                    message:ourChat,
                }))
                setOurChat("")
            }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>


            </button>


        </form>
    </div>
  )
}

export default LiveChat




