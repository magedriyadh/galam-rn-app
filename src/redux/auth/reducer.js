import { createSlice } from '@reduxjs/toolkit'
import * as actions from './action';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    fetching: false,
    error: {},
  },
  reducers: {},
  extraReducers: {
    [actions.login.pending]: (state, action) => {
      state.fetching = true;
      state.error = {};
    },
    [actions.login.fulfilled]: (state, { payload }) => {
      state.user = payload.data.data;
      state.fetching = false;
    },
    [actions.login.rejected]: (state, { payload }) => {
      state.error = payload;
      console.log(payload)
      state.fetching = false;
    }
  }
});

export default slice.reducer;

