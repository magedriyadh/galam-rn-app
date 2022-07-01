import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from '../../apis/useApi'

export const schoolValidate = createAsyncThunk(
  'schools/validate',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await http.post('/schools/validate', { slug })
      http.defaults.headers.common['slug'] = response.data.data.slug;
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
