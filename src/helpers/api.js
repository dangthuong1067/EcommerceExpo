import axios from 'axios';
import { Alert } from 'react-native';

let store;
let logoutThunk;

export const inject = (_store,_thunk) => {
  store = _store
  logoutThunk = _thunk;
}

export const instance = axios.create({
  baseURL : `${process.env.EXPO_PUBLIC_HOST}`,
});

export const instanceAuth = axios.create({
  baseURL : `${process.env.EXPO_PUBLIC_HOST}`,
});

instanceAuth.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Add a response interceptor
instanceAuth.interceptors.response.use(
  (response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, async (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  const { status } = error.response;
  if (status === 401 || status === 403) {
    Alert.alert('Vui lòng đăng nhập lại!');
    store.dispatch(logoutThunk());
  }
  return Promise.reject(error);
});