import { createSlice } from "@reduxjs/toolkit";
import { chat_count } from "./const";

const chatslice=createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addmessages:(state,action)=>{
            state.messages.splice(chat_count,1)
            state.messages.push(action.payload)
        }
    }
})
export const {addmessages}=chatslice.actions
export default chatslice.reducer;