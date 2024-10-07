import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import { instanceAuth } from '../../helpers/api'

const INIT_STATE = {
  loading: true,
  cartList: [],
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
      .addCase(addCartThunk.fulfilled, (state, action) => {
        const productFound = state.cartList.find(item => item.id === action.payload.id)
        if (productFound) {
          productFound.quantity = action.payload.quantity
        } else {
          state.cartList = [...state.cartList, action.payload]
        }
      })
  }

})

export const addCartThunk = createAsyncThunk(
  'cart/addCartThunk',
  async (data, thunkAPI) => {
    const { productId, quantity, image } = data;

    try {
      const response = await instanceAuth.post(
        '/cart/addCart',
        {
          productId,
          quantity,
          image
        }
      );

      return response.data.product
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


