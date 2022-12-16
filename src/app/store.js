import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { userAPI } from "../features/user/userAPI";
import { foodAPI } from "../features/products/foodAPI";

const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [foodAPI.reducerPath]: foodAPI.reducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware, foodAPI.middleware),
});
export default store;
