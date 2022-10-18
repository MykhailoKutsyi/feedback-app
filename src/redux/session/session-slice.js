import { createSlice } from '@reduxjs/toolkit';
import { sendFeedback } from './session-operations';

const initialState = {
  error: null,
  loading: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {
    [sendFeedback.fulfilled](state) {
      state.error = false;
      state.loading = false;
    },
    [sendFeedback.rejected](state) {
      state.error = true;
      state.loading = false;
    },
    [sendFeedback.pending](state) {
      state.loading = true;
    },
  },
});

export default sessionSlice.reducer;
