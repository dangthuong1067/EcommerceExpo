import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import requestApi from '../../helpers/requestApi'

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
  async (data, thunkAPI) => {
    const { email, password } = data;
    const response = await requestApi.post(
      `/auth/login`,
      {
        email,
        password
      }
    )

    // if (!response) {
    //   return thunkAPI.rejectWithValue('Bạn nhập sai email hoặc mật khẩu. Vui lòng nhập lại!');
    // }

    const { token } = await response
    await AsyncStorage.setItem('token', token);
    return token
  }
)


export const signupThunk = createAsyncThunk(
  'auth/signupThunk',
  async (data, thunkAPI) => {
    const { username, email, password, confirmPassword, role } = data;
    const response = await requestApi.post(
      `/auth/signup`,
      {
        username,
        email,
        password,
        confirmPassword,
        role
      }
    )

    if (!response) {
      return thunkAPI.rejectWithValue("Email này đã được dùng. Vui lòng tạo email khác!");
    }
  }
)
export const logoutThunk = createAsyncThunk(
  'auth/logoutThunk',
  async () => {
    await AsyncStorage.removeItem('token');
  }
)
export default authSlice.reducer