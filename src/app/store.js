import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { userAPI } from "../features/user/userAPI";

const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
});
export default store;
