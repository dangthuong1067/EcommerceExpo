import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import { instanceAuth } from '../../helpers/api'

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
    const responseBanner = instanceAuth.get('/home/banners');

    const responseSaleProducts = instanceAuth.get(
      '/home/products',
      {
        tag: 'sale'
      },
    )

    const responsePoPularProducts = instanceAuth.get(
      '/home/products',
      {
        tag: 'popular'
      },
    )

    const responseCategoriesList = instanceAuth.get('/home/categories',)

    const responseAll = await Promise.all([responseBanner, responseSaleProducts, responsePoPularProducts, responseCategoriesList])

    const processResponseAll = async () => {
      const { data: { banners } } = responseAll[0].data;
      const { data: { products: saleProducts } } = responseAll[1].data;
      const { data: { products: popularProduct } } = responseAll[2].data;
      const { data: { categories } } = responseAll[3].data;

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
