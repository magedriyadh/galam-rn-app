import { createSlice } from '@reduxjs/toolkit'
import * as actions from './action';

const slice = createSlice({
  name: 'schools',
  initialState: {
    school: {},
    fetching: false,
    error: {},
  },
  reducers: {},
  extraReducers: {
    [actions.schoolValidate.pending]: (state, action) => {
      state.fetching = true;
      state.error = {};
    },
    [actions.schoolValidate.fulfilled]: (state, { payload }) => {
      state.school = payload.data.data;
      state.fetching = false;
    },
    [actions.schoolValidate.rejected]: (state, { payload }) => {
      state.error = payload;
      state.fetching = false;
    }
  }
});

export default slice.reducer;

