import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: { filter: '' },
  reducers: {
    setStatusFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setStatusFilter } = filterSlice.actions;
