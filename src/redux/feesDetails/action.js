import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { http } from '../../apis/useApi'
import { handleAction } from '../../helper'

export const feesDetailsShow = createAsyncThunk(
  'feesDetails/show',
  async (id, { rejectWithValue }) => {
    try {
      const response = await http.get(`/students/${id}/fees_details`)
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
