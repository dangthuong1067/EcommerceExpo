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
  async (parameter, thunkAPI) => {
    const response = await instanceAuth.get('/categoris/getCategoriesList');
    if (response) {
      const { data: { categories } } = response.data;
      return categories;
    }
    return thunkAPI.rejectWithValue('Can not fetch data');
  }
)

export default categoriesSlice.reducer;
