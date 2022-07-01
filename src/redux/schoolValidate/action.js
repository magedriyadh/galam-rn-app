import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from '../../apis/useApi'

export const schoolValidate = createAsyncThunk(
  'schools/validate',
  slug => http.post('/schools/validate', { slug })
)