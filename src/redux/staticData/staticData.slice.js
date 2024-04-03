import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import request from '../../helpers/request'

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
    const responseBanner = request(
      '/home/banners',
      undefined,
      thunkAPI
    )

    const responseSaleProducts = request(
      '/home/products',
      {
        query: { tag: 'sale' }
      },
      thunkAPI
    )

    const responsePoPularProducts = request(
      '/home/products',
      {
        query: { tag: 'popular' }
      },
      thunkAPI
    )

    const responseCategoriesList = request(
      '/home/categories',
      undefined,
      thunkAPI
    )

    const responseAll = await Promise.all([responseBanner, responseSaleProducts, responsePoPularProducts, responseCategoriesList])

    const processResponseAll = async () => {
      const { data: { banners } } = await responseAll[0].json();
      const { data: { products: saleProducts } } = await responseAll[1].json();
      const { data: { products: popularProduct } } = await responseAll[2].json();
      const { data: { categories } } = await responseAll[3].json();

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
