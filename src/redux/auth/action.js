import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from '../../apis/useApi'
import { getSlug, getToken, removeToken, setToken } from '../../hooks/useStorage'

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.post('/sessions', data)
      http.defaults.headers['Authorization'] = response.data.data.auth_token;
      
      await setToken(response.data.data.auth_token)
      return response;

    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const getUser = createAsyncThunk(
  'auth/get_user',
  async (data, { rejectWithValue }) => {
    try {
      const slug = await getSlug();
      if (!slug) throw Error("slug is missing");
      http.defaults.headers['slug'] = slug;
      
      const token = await getToken();
      if (!token) throw Error("token not valid");
      http.defaults.headers['Authorization'] = token;

      const response = await http.get('/users');
      
      return response;

    } catch (err) {
      await removeToken()
      await removeSlug()
      http.defaults.headers['Authorization'] = null;
      http.defaults.headers['slug'] = null;

      return rejectWithValue(err.response.data)
    }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async (data, { rejectWithValue }) => {
    try {
      await removeToken()
      await removeSlug()
      await http.delete('/sessions')
    } catch (err) {
      http.defaults.headers['Authorization'] = null;
      http.defaults.headers['slug'] = null;
      return rejectWithValue(err.response.data)
    }
  }
)
