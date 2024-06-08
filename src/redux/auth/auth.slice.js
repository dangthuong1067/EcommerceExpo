import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import { instance } from '../../helpers/api'

const INIT_STATE = {
  token: null,
  // loading: true,
  status: "success"
}

const authSlice = createSlice({
  name: 'auth',
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTokenThunk.fulfilled, (state, action) => {
        state.token = action.payload;
        // state.loading = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.token = null;
      })
  }
})

export const getTokenThunk = createAsyncThunk(
  'auth/getTokenThunk',
  async () => await AsyncStorage.getItem('token')
)

export const loginThunk = createAsyncThunk(
  'auth/loginThunk',
  async (data) => {
    const { email, password } = data;
    const response = await instance.post(
      '/auth/login',
      {
        email,
        password
      }
    );

    const { data: { token } } = response.data;

    await AsyncStorage.setItem('token', token);
    return token
  }
)


export const signupThunk = createAsyncThunk(
  'auth/signupThunk',
  async (data) => {
    const { username, email, password, confirmPassword, role } = data;
    await instance.post(
      `/auth/signup`,
      {
        username,
        email,
        password,
        confirmPassword,
        role
      }
    );
  }
)
export const logoutThunk = createAsyncThunk(
  'auth/logoutThunk',
  async () => {
    await AsyncStorage.removeItem('token');
  }
)
export default authSlice.reducer