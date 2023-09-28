import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import SearchSlice from "./SearchSlice";
import chatslice from "./chatslice";


const store=configureStore({
    reducer:{
        app:appslice,
        search:SearchSlice,
        chat:chatslice
    },
}
   
)

export default store;