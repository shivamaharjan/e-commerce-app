import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./auth/userSlice";

const store = configureStore({
    reducer:{
        userInfo: userReducer,

    }
})

export default store;