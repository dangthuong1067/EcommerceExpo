import {
  createSlice,
} from '@reduxjs/toolkit'

const INIT_STATE = {
  favoriteList: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: INIT_STATE,
  reducers: {
    addFavoriteList: (state, action) => {
      const newId = action.payload.productId;
      const isDuplicate = state.favoriteList.some(item => item.id === newId);

      if (!isDuplicate) {
        state.favoriteList.push({ id: newId, price: action.payload.productPrice, image: action.payload.image });
      }
    },

    removeFavoriteProduct: (state, action) => {
      const index = state.favoriteList.findIndex(item => item.id === action.payload);
      state.favoriteList.splice(index, 1);
    }
  },
})

export default favoriteSlice.reducer;
export const { addFavoriteList, removeFavoriteProduct } = favoriteSlice.actions;