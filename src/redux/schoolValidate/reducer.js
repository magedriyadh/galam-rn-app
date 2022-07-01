import { createSlice } from '@reduxjs/toolkit'
import * as actions from './action';

const slice = createSlice({
  name: 'schools',
  initialState: {
    school: {},
  },
  reducers: {},
  extraReducers: {
    [actions.schoolValidate.fulfilled]: (state, { payload }) => {
      console.log(payload.data, 'action')
      state.school = payload.data.data;
    }
  }
});

export default slice.reducer;

