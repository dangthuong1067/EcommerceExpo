import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import request from '../../helpers/request';

const INIT_STATE = {
  // token: null,
  banners: [],
  categoriesList: [],
  products: [],
  saleProducts: [],
  popularProducts: [],
  productsByCategories: {
    categories: [],
    loading: false,
    productsByCategories: []
  }
}

const homeSlice = createSlice({
  name: 'home',
  initialState: INIT_STATE,
  reducers: {
    updateCategories: (state, action) => {
      const idCategory = action.payload
      state.productsByCategories.categories.forEach(item => {
        if (item.id === idCategory) {
          item.isSelectCategory = true;
        } else {
          item.isSelectCategory = false;
        }
      });
    },

    loadingProduct: (state, action) => {
      state.productsByCategories.loading = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBannersThunk.fulfilled, (state, action) => {
        state.banners = action.payload;
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        const tag = action.payload.tag;
        if (tag === 'sale') {
          state.saleProducts = action.payload.products;
        } else if (tag === 'popular') {
          state.popularProducts = action.payload.products;
        }
      })
      .addCase(getCategoriesListThunk.fulfilled, (state, action) => {
        state.categoriesList = [{ id: -1, categoryName: 'TẤT CẢ', isSelectCategory: true }, ...action.payload]
      })
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        const newCategoriesList = action.payload.map(item => ({ ...item, isSelectCategory: false }))
        state.productsByCategories.categories = [{ id: '', categoryName: 'TẤT CẢ', isSelectCategory: true }, ...newCategoriesList]
      })
      .addCase(getProductsByCategoryThunk.fulfilled, (state, action) => {
        state.productsByCategories.productsByCategories = action.payload;
        state.productsByCategories.loading = false;
      })
  }
})

export const getBannersThunk = createAsyncThunk(
  'home/getBannersThunk',
  async (parameter, thunkAPI) => {
    const response = await request(
      '/home/banners',
      undefined,
      thunkAPI
    )
    if (response.ok) {
      const data = await response.json();
      const banners = data.data.banners;
      return banners;
    }
    return thunkAPI.rejectWithValue('Can not fetch data');
  }
)

export const getCategoriesThunk = createAsyncThunk(
  'home/getCategoriesThunk',
  async (parameter, thunkAPI) => {
    const response = await request(
      '/home/categories',
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

export const getProductsThunk = createAsyncThunk(
  'home/getProductsThunk',
  async (tag = '', thunkAPI) => {
    const response = await request(
      '/home/products',
      {
        query: { tag, }
      },
      thunkAPI
    )
    if (response.ok) {
      const { data: { products } } = await response.json();

      return {
        products,
        tag
      };
    }
    return thunkAPI.rejectWithValue('Can not fetch data');
  }
)

export const getCategoriesListThunk = createAsyncThunk(
  'home/getCategoriesListThunk',
  async (parameter, thunkAPI) => {
    const response = await request(
      '/home/categories',
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

export const getProductsByCategoryThunk = createAsyncThunk(
  'home/getProductsByCategoryThunk',
  async (categoryId = '', thunkAPI) => {
    const response = await request(
      '/home/products',
      {
        query: { categoryId, }
      },
      thunkAPI
    )

    if (response.ok) {
      const data = await response.json();
      const products = data.data.products;
      return products;
    }
    return thunkAPI.rejectWithValue('Can not fetch data');
  }
)

export default homeSlice.reducer;
export const { updateCategories, loadingProduct } = homeSlice.actions;