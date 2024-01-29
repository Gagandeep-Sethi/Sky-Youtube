import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"navSide",
    initialState:{
        openSide:false

    },
    reducers:{
        open:(state)=>{state.openSide=!state.openSide}
    }

})
export default appSlice.reducer
export const {open} =appSlice.actions