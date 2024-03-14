import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:"video",
initialState:{
    video:null
},
reducers:{
    addVideos:(state,action)=>{state.video=action.payload}
}
})


export default videoSlice.reducer
export const {addVideos}=videoSlice.actions