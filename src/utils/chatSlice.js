import { createSlice } from "@reduxjs/toolkit";
import { chat_length } from "./constant";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMsg:(state,action)=>{
            state.messages.splice(chat_length,1)
            state=state.messages.unshift(action.payload)
        },
        removeMsg:(state)=>{
            state=state.messages.pop()
        }
    }
})
export default chatSlice.reducer
export const  {addMsg,removeMsg}=chatSlice.actions