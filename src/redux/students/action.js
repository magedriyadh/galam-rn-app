import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from '../../apis/useApi'
import { handleAction } from '../../helper'

export const studentsList = createAsyncThunk(
  'students/index',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await http.get('/students')
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
