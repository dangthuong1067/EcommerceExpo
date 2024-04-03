import authReducer from './auth/auth.slice'
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/user.slice'
import homeReducer from "./home/home.slice";
import staticSlice from "./staticData/staticData.slice";
import appReducer from "./app/app.slice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    home: homeReducer,
    staticData: staticSlice,
    app: appReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
})

export default store