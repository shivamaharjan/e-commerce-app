import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./auth/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/ProductSlice"

const persistConfig = {
  key: "root",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const store = configureStore({
  reducer: {
    userInfo: persistedUserReducer,
    category: categoryReducer,
    product: productReducer,
  },
});

export default store;
