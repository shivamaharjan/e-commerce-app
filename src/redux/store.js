import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./auth/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const store = configureStore({
    reducer:{
        userInfo: persistedUserReducer,
    }
})

export default store;