import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import request from '../../helpers/request';
import requestApi from '../../helpers/requestApi';

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
    const response = await requestApi.get(
      '/categoris/getCategoriesList',
      {},
      thunkAPI
    )

    if (response) {
      const {categories} = response;
      return categories;
    }
    return thunkAPI.rejectWithValue('Can not fetch data');
  }
)



export default categoriesSlice.reducer;
