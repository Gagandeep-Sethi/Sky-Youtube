import { createSlice } from "@reduxjs/toolkit";
import { chat_length } from "./constant";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMsg:(state,action)=>{
            state.messages.splice(chat_length,1)//it will remove the element from the last if it exceeds the chat_length and it will remove 1 element as mentioned
            state=state.messages.unshift(action.payload)//unshift will add the element on the top of the messages array
        }
    }
})
export default chatSlice.reducer
export const  {addMsg}=chatSlice.actions