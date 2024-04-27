import axios from 'axios';

const requestApi = async (path, method = 'GET', body = {}, thunkAPI) => {
  const config = {
    method: method,
    baseURL: process.env.EXPO_PUBLIC_HOST,
    url: path,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const configGetApi = {
    method: method,
    baseURL: process.env.EXPO_PUBLIC_HOST,
    url: path,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${thunkAPI?.getState().auth.token}`,
    },
  };

  if (method === 'GET') {
    configGetApi.params = body;
  } else {
    config.data = body;
  }

  const response = await axios(method === 'GET' ? configGetApi : config)

  //  if (response.status === 401 || response.status === 403) {
  //   thunkAPI.dispatch(logoutThunk())
  // }
  const { data: { data: responseApi } } = response

  return responseApi

};

requestApi.post = (path, body) => {
  return requestApi(path, 'POST', body);
};

requestApi.get = (path, params = {}, thunkAPI) => {
  return requestApi(path, 'GET', params, thunkAPI);
};

export default requestApi;
