import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import { instanceAuth } from '../../helpers/api';

const INIT_STATE = {
  categoriesList: [],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INIT_STATE,
  extraReducers: builder => {
    builder
      .addCase(getCategoriesListThunk.fulfilled, (state, action) => {
        state.categoriesList = action.payload;
      })
  }
})

export const getCategoriesListThunk = createAsyncThunk(
  'categories/getCategoriesListThunk',
  async () => {
    const response = await instanceAuth.get('/categoris/getCategoriesList');
      const { data: { categories } } = response.data;
      return categories;
  }
)

export default categoriesSlice.reducer;
