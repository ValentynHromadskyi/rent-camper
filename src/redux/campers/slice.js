import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: 'campers',

  initialState: {
    items: [],
    totalItems: 0,
    loading: false,
    error: null,
  },

  reducers: {
    resetItems: state => {
      state.items = [];
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.data;
      })

      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const { resetItems } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
