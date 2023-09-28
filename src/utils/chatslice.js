import { createSlice } from "@reduxjs/toolkit";

const chatslice=createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addmessages:(state,action)=>{
            state.messages.push(action.payload)
        }
    }
})
export const {addmessages}=chatslice.actions
export default chatslice.reducer;