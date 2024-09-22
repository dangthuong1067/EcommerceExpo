import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import { instanceAuth } from '../../helpers/api'

const INIT_STATE = {
  loading: true,
  cartList: [],
  quantity: 1
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: INIT_STATE,
  reducers: {
    updateQuantity(state, action) {
      state.quantity = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCartListThunk.fulfilled, (state, action) => {
        state.cartList = action.payload
      })
  }

})

export const addCartThunk = createAsyncThunk(
  'cart/addCartThunk',
  async (data, thunkAPI) => {
    const { productId } = data;
    const state = thunkAPI.getState();
    const quantity = state.cart.quantity;

    try {
      const response = await instanceAuth.post(
        '/cart/addCart',
        {
          productId,
          quantity
        }
      );
    } catch (error) {
      console.log('error', error);
    }
  }
)

export const getCartListThunk = createAsyncThunk(
  'cart/getCartListThunk',
  async (data, thunkAPI) => {
    try {
      const res = await instanceAuth.get('/cart/cartList');
      return res.data.data.cartList
    } catch (error) {
      console.log('error', error);
    }
  }
)

export const removeCartThunk = createAsyncThunk(
  'cart/addCartThunk',
  async (data, thunkAPI) => {
    const { productId } = data;

    try {
      const response = await instanceAuth.post(
        '/cart/removeCart',
        {
          productId,
        }
      );

    } catch (error) {
      console.log('error', error);
    }
  }
)

export const {
  updateQuantity
} = cartSlice.actions

export default cartSlice.reducer;


