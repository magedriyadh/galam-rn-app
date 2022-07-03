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
  reducers: {
    setStudent: (state, action) => {
      state.student = action.payload;
    }
  },
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
      state.student = payload.data.data.student;
      state.fetching = false;
    },
    [actions.studentLoad.rejected]: (state, { payload }) => {
      state.error = payload;
      state.fetching = false;
    }
  }
});

export const { setStudent } = slice.actions

export default slice.reducer;

