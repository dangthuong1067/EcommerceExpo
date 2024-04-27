import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import request from '../../helpers/request'
import requestApi from '../../helpers/requestApi'

const INIT_STATE = {
  banners: [],
  saleProducts: [],
  popularProducts: [],
  categoriesList: []
}

const staticSlice = createSlice({
  name: 'static',
  initialState: INIT_STATE,
  extraReducers: builder => {
    builder
      .addCase(getStaticDataThunk.fulfilled, (state, action) => {
        state.banners = action.payload.banners,
          state.saleProducts = action.payload.saleProducts,
          state.popularProducts = action.payload.popularProduct,
          state.categoriesList = action.payload.categories
      })
  }
})

export const getStaticDataThunk = createAsyncThunk(
  'home/getStaticDataThunk',
  async (parameter, thunkAPI) => {
    const responseBanner = requestApi.get(
      '/home/banners',
      {},
      thunkAPI
    )

    const responseSaleProducts = requestApi.get(
      '/home/products',
      {
        tag: 'sale'
      },
      thunkAPI
    )

    const responsePoPularProducts = requestApi.get(
      '/home/products',
      {
        tag: 'popular'
      },
      thunkAPI
    )

    const responseCategoriesList = requestApi.get(
      '/home/categories',
      {},
      thunkAPI
    )

    const responseAll = await Promise.all([responseBanner, responseSaleProducts, responsePoPularProducts, responseCategoriesList])

    const processResponseAll = async () => {
      const { banners } = responseAll[0];
      const { products: saleProducts } = responseAll[1];
      const { products: popularProduct } = responseAll[2];
      const { categories } = responseAll[3];

      return {
        banners,
        saleProducts,
        popularProduct,
        categories
      }
    }

    const result = await processResponseAll();
    if (result) return result
    return thunkAPI.rejectWithValue('Can not fetch data');
  }
)

export default staticSlice.reducer
