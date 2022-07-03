import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "./apis/useApi";


export const handleAction = ({
  name,
  url,
  method = 'GET',
}) => {
  return createAsyncThunk(
    name,
    async (data, { rejectWithValue }) => {
      try {
        const response = await http({
          url,
          method,
          data
        })
        return response;
      } catch (err) {
        return rejectWithValue(err.response.data)
      }
    }
  )
}