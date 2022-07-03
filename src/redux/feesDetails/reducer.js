import { createSlice } from '@reduxjs/toolkit'
import * as actions from './action';

const slice = createSlice({
  name: 'feesDetails',
  initialState: {
    installments: [],
    fees_payments: [],
    student_discounts: [],
    student_fees: [],
    student: {},
    fetching: false,
    error: {},
  },
  reducers: {},
  extraReducers: {
    [actions.feesDetailsShow.pending]: (state) => {
      state.fetching = true;
      state.error = {};
    },
    [actions.feesDetailsShow.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        ...payload.data.data,
        fetching: false,
      }
    },
    [actions.feesDetailsShow.rejected]: (state, { payload }) => {
      state.error = payload;
      state.fetching = false;
    },
  }
});

export default slice.reducer;

