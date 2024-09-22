import authReducer from './auth/auth.slice'
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/user.slice'
import homeReducer from "./home/home.slice";
import staticSlice from "./staticData/staticData.slice";
import appReducer from "./app/app.slice";
import categoriesReducer from './categories/categories.slice';
import favoriteReducer from './favorite/favorite.slice';
import cartReducer from './cart/cart.slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    home: homeReducer,
    staticData: staticSlice,
    app: appReducer,
    categories: categoriesReducer,
    favorite: favoriteReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
})

export default store