import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import request from "../../helpers/request";
import mime from 'mime'
const INIT_STATE = {
  info: null,
  loading: true,
  user: null
}

const userSlice = createSlice({
  name: 'user',
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMeThunk.fulfilled, (state, action) => {
        const { payload } = action
        state.info = payload
        state.loading = false
      })
  }
})

export const getMeThunk = createAsyncThunk(
  'user/getMeThunk',
  async (data, thunkAPI) => {
    const response = await request('/users/me', undefined, thunkAPI)
    const { data: { user } } = await response.json()
    return user
  }
)

export const updateMeThunk = createAsyncThunk(
  'user/updateMeThunk',
  async (data, thunkAPI) => {
    const formData = new FormData()
    formData.append('username', data.username)
    if (data.avatar) {
      const fileName = data.avatar.uri.split('/').pop()
      formData.append('avatar', {
        uri: data.avatar.uri,
        name: fileName,
        type: mime.getType(data.avatar.uri)
      })
    }

    const response = await request(
      '/users/me',
      {
        method: 'PATCH',
        body: formData
      },
      thunkAPI
    )
    const { data: { user } } = await response.json()
    return user
  }
)
export default userSlice.reducer