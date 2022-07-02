import { createSlice } from '@reduxjs/toolkit'
import * as actions from './action';

const slice = createSlice({
  name: 'students',
  initialState: {
    students: [],
    student: {},
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
    },
    // studentLoad
    [actions.studentLoad.pending]: (state) => {
      state.fetching = true;
      state.error = {};
    },
    [actions.studentLoad.fulfilled]: (state, { payload }) => {
      console.log(payload.data.data, 'payload')
      state.student = payload.data.data.student;
      state.fetching = false;
    },
    [actions.studentLoad.rejected]: (state, { payload }) => {
      state.error = payload;
      state.fetching = false;
    }
  }
});

export default slice.reducer;

