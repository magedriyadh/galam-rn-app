import { createSlice } from '@reduxjs/toolkit'
import * as actions from './action';

const slice = createSlice({
  name: 'students',
  initialState: {
    students: [],
    fetching: false,
    error: {},
  },
  reducers: {},
  extraReducers: {
    [actions.studentsList.pending]: (state) => {
      state.fetching = true;
      state.error = {};
    },
    [actions.studentsList.fulfilled]: (state, { payload }) => {
      state.students = payload.data.data.students;
      state.fetching = false;
    },
    [actions.studentsList.rejected]: (state, { payload }) => {
      state.error = payload;
      state.fetching = false;
    }
  }
});

export default slice.reducer;

