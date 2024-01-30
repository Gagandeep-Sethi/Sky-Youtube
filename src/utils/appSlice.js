import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"navSide",
    initialState:{
        openSide:false

    },
    reducers:{
        open:(state)=>{state.openSide=!state.openSide},
        close:(state)=>{state.openSide=true}
    }

})
export default appSlice.reducer
export const {open,close} =appSlice.actions