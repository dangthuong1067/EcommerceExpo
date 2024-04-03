import { loginThunk, logoutThunk } from "../redux/auth/auth.slice"

const request = async (path, options = {}, thunkAPI) => {
  const {
    headers = {},
    body,
    query = null,
    host = process.env.EXPO_PUBLIC_HOST,
    ...extraOptions
  } = options
  const { auth: { token } } = thunkAPI.getState()

  const reqOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...headers
    },
    ...extraOptions,
  }

  if (body) {
    if (body instanceof FormData) {
      reqOptions.body = body
      delete reqOptions.headers['Content-Type']
    } else {
      reqOptions.body = typeof body === 'object'
        ? JSON.stringify(body)
        : body
    }


  }

  let queryString = ''
  if (query) {
    queryString = new URLSearchParams(query).toString()
    queryString = queryString && `?${queryString}`
  }

  const response = await fetch(`${host}${path}${queryString}`, reqOptions)


  if (response.status === 401 || response.status === 403) {
    thunkAPI.dispatch(logoutThunk())
  }
  return response
}

export default request