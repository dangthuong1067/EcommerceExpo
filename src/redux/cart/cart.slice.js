import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import { instanceAuth } from '../../helpers/api'

const INIT_STATE = {
  loading: true,
  cartList: [],
  totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: INIT_STATE,
  reducers: {
    updateQuantity(state, action) {
      state.quantity = action.payload
    },
    calculateTotal(state, action) {
      if (action.payload.isIncrease || action.payload.checked) {
        state.totalPrice += action.payload.productPriceTotal
      } else if (action.payload.isDecrease || !action.payload.checked) {
        state.totalPrice -= action.payload.productPriceTotal
      }
    },
    removeProduct(state, action) {
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
      .addCase(getCartListThunk.fulfilled, (state, action) => {
        state.cartList = action.payload
      })
      .addCase(removeCartThunk.fulfilled, (state, action) => {
        state.cartList = state.cartList.filter(item => item.id != action.payload.id)
      })
      .addCase(saveCheckStatusThunk.fulfilled, (state, action) => {
        state.cartList = action.payload
      })
  }

})

export const addCartThunk = createAsyncThunk(
  'cart/addCartThunk',
  async (data, thunkAPI) => {
    const { productId, quantity, image, capacity, color, price } = data;

    try {
      const response = await instanceAuth.post(
        '/cart/addCart',
        {
          productId,
          quantity,
          image,
          capacity,
          color,
          price
        }
      );

      return response.data.product
    } catch (error) {
      console.log('error', error);
    }
  }
)


export const saveCheckStatusThunk = createAsyncThunk(
  'cart/saveCheckStatusThunk',
  async (data, thunkAPI) => {
    const { productId, checkStatus } = data;

    try {
      const response = await instanceAuth.post(
        '/cart/saveCheckStatus',
        {
          productId,
          checkStatus,
        }
      );

      return response.data.cartList
    } catch (error) {
      console.log('error', error);
    }
  }
)



export const removeCartThunk = createAsyncThunk(
  'cart/removeCartThunk',
  async (data, thunkAPI) => {
    const { productId } = data;

    try {
      const response = await instanceAuth.post(
        '/cart/removeCart',
        {
          productId,
        }
      );

      return response.data.product
    } catch (error) {
      console.log('error', error);
    }
  }
)

export const getCartListThunk = createAsyncThunk(
  'cart/getCartListThunk',
  async () => {
    try {
      const response = await instanceAuth.get('/cart/getCartList');
      return response.data.cartList
    } catch (error) {
      console.log('error', error);
    }
  }
)

export const {
  updateQuantity,
  calculateTotal
} = cartSlice.actions

export default cartSlice.reducer;


