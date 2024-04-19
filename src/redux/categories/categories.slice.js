import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import request from '../../helpers/request';

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
    const response = await request(
      '/categoris/getCategoriesList',
      undefined,
      thunkAPI
    )

    if (response.ok) {
      const data = await response.json();
      const categories = data.data.categories;
      return categories;
    }
    return thunkAPI.rejectWithValue('Can not fetch data');
  }
)



export default categoriesSlice.reducer;
