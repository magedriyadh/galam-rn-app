import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from '../../apis/useApi'
import { removeToken, setToken } from '../../hooks/useStorage'

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.post('/sessions', data)
      http.defaults.headers.common['Authorization'] = response.data.data.auth_token;
      
      await setToken(response.data.data.auth_token)
      return response;

    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async (data, { rejectWithValue }) => {
    try {
      await removeToken()
      // const response = await http.post('/sessions', data)
      http.defaults.headers.common['Authorization'] = '';
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
