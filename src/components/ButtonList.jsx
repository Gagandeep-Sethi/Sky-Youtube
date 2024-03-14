import React from 'react'

const ButtonList = () => {
  const list=["All","Music","News","Tamil Cinema","Dramedy","Lofi","Bollywood Music",'Live',"gameShow","All","Music","News","Tamil Cinema","Dramedy","Lofi","Bollywood Music",'Live',"gameShow"]
  return (
    <div className='flex overflow-x-auto scroll mt-4'>
      
        {list.map((r,i)=>{
           return  <button key={i} className='px-4 py-2 mr-2  rounded-full text-red-600 border  border-red-600 transition ease-out duration-500 hover:bg-red-500 hover:text-white text-nowrap  '>{r}</button>
        })}
        
        
        
    </div>
    
  )
}

export default ButtonList